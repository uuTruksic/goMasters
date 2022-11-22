package auth

import (
	"log"
	"spotilie-api/mail"

	"github.com/gofiber/fiber/v2"
)

type ForgottenPassInput struct {
	Email string `json:"email"`
}

func SendForgottenPasswordEmail(c *fiber.Ctx) error {
	data := ForgottenPassInput{}
	err := c.BodyParser(&data)

	token := GenerateSecureToken(69)
	log.Println(data.Email)

	err = mail.SendEmail(data.Email, "Obnova hesla na nejlepším muzikálním webu vůbec!", "Klikněte zde: http://localhost:5173/new-password"+token)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return nil
}
