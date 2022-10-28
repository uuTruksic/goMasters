package main

import (
	"log"

	"spotilie-api/auth"

	"github.com/gofiber/fiber/v2"
)

type song struct {
	Name   string
	Author string
}

func Routes(app *fiber.App) {

	songs := []song{
		{Name: "Pisnicka", Author: "Vojtěch Novotný"},
		{Name: "Hezka pisnicka", Author: "Michal Truksa"},
	}

	songGroup := app.Group("/song")
	songGroup.Get("/", func(c *fiber.Ctx) error {
		loggedUser := auth.GetLoggedUser(c)
		if loggedUser == nil {
			return c.SendStatus(fiber.StatusForbidden)
		}

		log.Println(songs)
		return c.JSON(map[string]interface{}{"songs": songs})
	})

	authGroup := app.Group("/auth")
	authGroup.Post("/login", auth.Login)
	authGroup.Post("/register", auth.Register)
}
