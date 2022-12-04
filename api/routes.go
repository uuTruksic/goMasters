package main

import (
	"spotilie-api/auth"
	"spotilie-api/user"

	"github.com/gofiber/fiber/v2"
)

func Routes(app *fiber.App) {
	songGroup := app.Group("/song")
	songGroup.Get("/", getSongs)
	songGroup.Post("/add-song", addSong)

	authGroup := app.Group("/auth")
	authGroup.Post("/login", auth.Login)
	authGroup.Post("/register", auth.Register)
	authGroup.Post("/send-email", auth.SendForgottenPasswordEmail)

	userGroup := app.Group("/user")
	userGroup.Post("/change-data", user.ChangeData)
	userGroup.Post("/change-password", user.ChangePassword)
	userGroup.Get("/delete-account", user.DeleteAccout)
}
