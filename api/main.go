package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type song struct {
	Name   string
	Author string
}

func main() {
	app := fiber.New()

	songs := []song{
		{Name: "Pisnicka", Author: "Vojtěch Novotný"},
	}

	app.Get("/songs", func(c *fiber.Ctx) error {
		return c.JSON(map[string]interface{}{"songs": songs})
	})

	log.Fatal(app.Listen(":3000"))
}
