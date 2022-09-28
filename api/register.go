package main

import (
	"api/ent/user"
	"context"
	"log"

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

	user, err := Client.User.Query().Select().Where(user.Email("vojta.nvtn@gmail.com")).Only(context.Background())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	log.Println(user)
	return nil
}
