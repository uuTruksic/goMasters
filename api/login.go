package main

import (
	"api/ent/user"
	"context"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
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

	foundUser, err := Client.User.Query().Select().Where(user.Email(data.Email)).Only(context.Background())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}
	if foundUser == nil {
		fmt.Println("Wrong e-mail")
		return c.SendStatus(fiber.StatusBadRequest)
	}

	passCompare := bcrypt.CompareHashAndPassword([]byte(foundUser.Password), []byte(data.Password))
	if passCompare == nil {
		fmt.Println("login succesfull")
		return c.SendStatus(fiber.StatusOK)
	} else {
		fmt.Println("Wrong password")
		return c.SendStatus(fiber.StatusBadRequest)
	}
}
