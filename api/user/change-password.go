package user

import (
	"log"
	"spotilie-api/auth"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

type ChangePasswordInput struct {
	OldPassword        string `json:"oldPassword"`
	NewPassword        string `json:"newPassword"`
	ConfirmNewPassword string `json:"confirmNewPassword"`
}

func ChangePassword(c *fiber.Ctx) error {
	loggedUser := auth.GetLoggedUser(c)
	if loggedUser == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}

	data := ChangePasswordInput{}
	err := c.BodyParser(&data)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	log.Println(loggedUser)

	passCompare := bcrypt.CompareHashAndPassword([]byte(loggedUser.Password), []byte(data.OldPassword))
	if passCompare != nil {
		log.Println((err))
		return c.SendStatus(fiber.StatusBadRequest)
	}

	if data.NewPassword != data.ConfirmNewPassword {
		log.Println("Nové heslo se neshoduje")
		return c.SendStatus(fiber.StatusBadRequest)
	}

	if data.OldPassword == data.NewPassword {
		log.Println("Nové heslo se shoduje se starým heslem")
		return c.SendStatus(fiber.StatusBadRequest)
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(data.NewPassword), bcrypt.DefaultCost)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	_, err = loggedUser.Update().SetPassword(string(hashedPassword)).Save(c.Context())

	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(fiber.StatusOK)
}
