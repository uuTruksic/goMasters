package main

import (
	"spotilie-api/auth"
	"spotilie-api/user"

	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App) {
	songGroup := app.Group("/song")
	songGroup.Get("/", getSongs)

	authGroup := app.Group("/auth")
	authGroup.Post("/login", auth.Login)
	authGroup.Post("/register", auth.Register)

	userGroup := app.Group("/user")
	userGroup.Post("/change-data", user.ChangeData)
}
