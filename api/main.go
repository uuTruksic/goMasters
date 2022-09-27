package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type song struct {
	Name   string
	Author string
}

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{AllowOrigins: "http://localhost:5173"}))

	songs := []song{
		{Name: "Pisnicka", Author: "Vojtěch Novotný"},
		{Name: "Hezka pisnicka", Author: "Michal Truksa"},
	}

	app.Get("/songs", func(c *fiber.Ctx) error {
		return c.JSON(map[string]interface{}{"songs": songs})
	})

	app.Post("/login", login)

	log.Fatal(app.Listen(":3000"))
}
