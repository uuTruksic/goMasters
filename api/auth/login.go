package auth

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"log"
	"spotilie-api/db"
	"spotilie-api/ent"
	"spotilie-api/ent/session"
	"spotilie-api/ent/user"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func GenerateSecureToken(length int) string {
	b := make([]byte, length)
	if _, err := rand.Read(b); err != nil {
		return ""
	}
	return hex.EncodeToString(b)
}

func GetLoggedSession(c *fiber.Ctx) *ent.Session {
	data := c.Get("Authorization")
	if len(data) == 0 {
		return nil
	}
	token := strings.Split(data, " ")

	if len(token) < 2 {
		return nil
	}

	if token[0] != "token" {
		return nil
	}
	session, err := db.Client.Session.Query().Where(session.Token(token[1])).WithUser().Only(c.Context())

	if err != nil {
		log.Println(err)
		return nil
	}

	return session
}

func GetLoggedUser(c *fiber.Ctx) *ent.User {
	session := GetLoggedSession(c)
	if session == nil {
		return nil
	}
	user, err := session.Edges.UserOrErr()
	if err != nil {
		return nil
	}
	_, err = session.Update().SetUsed(session.Used + 1).SetIP(c.IP()).SetDevice(c.Get("user-agent")).SetUpdatedAt(time.Now()).Save(c.Context())
	if err != nil {
		return nil
	}

	return user
}

type loginInput struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
}

func Login(c *fiber.Ctx) error {
	data := loginInput{}
	err := c.BodyParser(&data)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	foundUser, err := db.Client.User.Query().Select().Where(user.Email(data.Email)).Only(context.Background())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if foundUser == nil {
		log.Println("Wrong e-mail")
		return c.SendStatus(fiber.StatusBadRequest)
	}

	passCompare := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(data.Password))
	if passCompare == nil {
		token := GenerateSecureToken(64)
		session, err := db.Client.Session.Create().SetToken(token).SetIP(c.IP()).SetDevice(c.Get("user-agent")).SetUsed(0).SetUser(foundUser).Save(c.Context())
		log.Println("login succesfull")

		if err != nil {
			log.Print(err)
			return c.SendStatus(fiber.StatusBadRequest)
		}
		return c.JSON(fiber.Map{"session": session.Token})
	} else {
		log.Println("Wrong password")
		return c.SendStatus(fiber.StatusBadRequest)
	}
}
