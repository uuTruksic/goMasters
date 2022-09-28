package main

import (
	"api/ent"
	"context"
	"log"

	_ "github.com/go-sql-driver/mysql"
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

	Client, err := ent.Open("mysql", "root:@tcp(localhost:3306)/spotilie?parseTime=true")
	if err != nil {
		panic(err)
	}

	err = Client.Schema.Create(context.Background())
	if err != nil {
		panic(err)
	}

	songs := []song{
		{Name: "Pisnicka", Author: "Vojtěch Novotný"},
		{Name: "Hezka pisnicka", Author: "Michal Truksa"},
	}

	app.Get("/songs", func(c *fiber.Ctx) error {
		return c.JSON(map[string]interface{}{"songs": songs})
	})

	app.Post("/login", login)

	app.Get("/users", func(c *fiber.Ctx) error {
		users, err := Client.User.Query().Select().All(context.Background())
		if err != nil {
			log.Println(err)
			return c.SendStatus(fiber.StatusInternalServerError)
		}
		return c.JSON(users)
	})

	log.Fatal(app.Listen(":3000"))
}
