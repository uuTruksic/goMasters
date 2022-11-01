package main

import (
	"log"
	"spotilie-api/auth"
	"spotilie-api/db"

	"github.com/gofiber/fiber/v2"
)

func getSongs(c *fiber.Ctx) error {
	loggedUser := auth.GetLoggedUser(c)
	if loggedUser == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}

	songs, err := db.Client.Song.Query().All(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(songs)
}
