package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

type song struct {
	name   string
	author string
}

func main() {
	app := fiber.New()

	songs := []song{
		{name: "Pisnicka", author: "Vojtěch Novotný"},
		{name: "Pisnicka 2", author: "Michal Truksa"},
	}

	app.Get("/songs", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"songs": songs})
	})

	log.Fatal(app.Listen(":3000"))
}
