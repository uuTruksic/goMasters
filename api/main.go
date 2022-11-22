package main

import (
	"context"
	"log"
	"os"
	"spotilie-api/db"
	"spotilie-api/ent/session"
	"time"

	"github.com/go-co-op/gocron"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{AllowOrigins: "*"}))

	db.Connect()
	Routes(app)

	if !fiber.IsChild() {
		scheduler := gocron.NewScheduler(time.UTC)
		scheduler.Every(1).Day().Do(func() {
			beforeMonth := time.Now().Add(-(30 * 24 * time.Hour))
			sessions, err := db.Client.Session.Delete().Where(session.UpdatedAtLT(beforeMonth)).Exec(context.Background())
			if err != nil {
				log.Println(err)
				return
			}
			log.Println(sessions)
		})
		scheduler.StartAsync()
	}

	log.Println("BAZINGA")
	log.Println(os.Getenv("PORT"))
	log.Fatal(app.Listen(":" + os.Getenv("PORT")))
}
