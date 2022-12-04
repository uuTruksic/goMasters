package main

import (
	"log"
	"spotilie-api/auth"
	"spotilie-api/db"

	"github.com/gofiber/fiber/v2"
)

type addSongInput struct {
	Name   string `json:"name" validate:"required"`
	Author string `json:"author" validate:"required"`
	Genre  string `json:"genre" validate:"required"`
}

func addSong(c *fiber.Ctx) error {
	loggedUser := auth.GetLoggedUser(c)
	if loggedUser == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}

	data := addSongInput{}
	err := c.BodyParser(&data)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	_, err = db.Client.Song.Create().SetName(data.Name).SetAuthor(data.Author).SetGenre(data.Genre).Save(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.SendStatus(fiber.StatusOK)
}
