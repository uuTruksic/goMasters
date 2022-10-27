package main

import (
	"api/ent"
	"api/ent/session"
	"context"
	"log"
	"time"

	"github.com/go-co-op/gocron"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type song struct {
	Name   string
	Author string
}

var Client *ent.Client

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{AllowOrigins: "http://localhost:5173"}))

	var err error
	Client, err = ent.Open("mysql", "root:@tcp(localhost:3306)/spotilie?parseTime=true")
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
		loggedUser := GetLoggedUser(c)
		if loggedUser == nil {
			return c.SendStatus(fiber.StatusForbidden)
		}

		log.Println(songs)
		return c.JSON(map[string]interface{}{"songs": songs})
	})

	app.Post("/register", register)

	app.Post("/login", login)

	if !fiber.IsChild() {
		scheduler := gocron.NewScheduler(time.UTC)
		scheduler.Every(1).Minute().Do(func() {
			beforeMonth := time.Now().Add(-(30 * 24 * time.Hour))
			sessions, err := Client.Session.Delete().Where(session.UpdatedAtLT(beforeMonth)).Exec(context.Background())
			if err != nil {
				log.Println(err)
				return
			}
			log.Println(sessions)
		})
		scheduler.StartAsync()
	}

	log.Fatal(app.Listen(":3000"))
}
