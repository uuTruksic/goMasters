package main

import (
	"api/ent/user"
	"context"
	"crypto/rand"
	"encoding/hex"
	"log"

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

type loginInput struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
}

func login(c *fiber.Ctx) error {
	data := loginInput{}
	err := c.BodyParser(&data)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	foundUser, err := Client.User.Query().Select().Where(user.Email(data.Email)).Only(context.Background())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if foundUser == nil {
		log.Println("Wrong e-mail")
		return c.SendStatus(fiber.StatusBadRequest)
	}

	passCompare := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(data.Password))
	if passCompare != nil {
		log.Println("Wrong password")
		return c.SendStatus(fiber.StatusBadRequest)
	}
	token := GenerateSecureToken(64)

	_, err = Client.Session.Create().SetIP(c.IP()).SetDevice(c.Get("user-agent")).SetToken(token).SetUsed(0).SetUser(foundUser).Save(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.Map{
		"token": token,
	})
}
