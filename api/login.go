package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

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

	if data.Email == "hezky.email@seznam.cz" && data.Password == "heslo" {
		return c.JSON(true)
	} else {
		return c.JSON(false)
	}
}
