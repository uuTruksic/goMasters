package main

import (
	"api/ent"
	"api/ent/user"
	"context"
	"log"
	"net/mail"

	"github.com/gofiber/fiber/v2"
)

type registerInput struct {
	Name            string `json:"name" validate:"required"`
	Email           string `json:"email" validate:"required"`
	Password        string `json:"password" validate:"required"`
	ConfirmPassword string `json:"confirmPassword" validate:"required"`
}

func register(c *fiber.Ctx) error {
	data := registerInput{}
	err := c.BodyParser(&data)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	_, err = mail.ParseAddress(data.Email)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	foundUser, _ := Client.User.Query().Select().Where(user.Email(data.Email)).Only(context.Background())
	if foundUser != nil {
		log.Println("User with email already exists")
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if err != nil && !ent.IsNotFound(err) {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	if data.Password != data.ConfirmPassword || data.Password == "" {
		log.Println("Passwords don't match")
		return c.SendStatus(fiber.StatusBadRequest)
	}

	return nil
}
