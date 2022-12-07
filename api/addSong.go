package main

import (
	"log"
	"spotilie-api/auth"
	"spotilie-api/db"

	_ "image"

	"github.com/gofiber/fiber/v2"
	"github.com/valyala/fasthttp"
)

func uploadImage(c *fiber.Ctx) error {
	file, err := c.FormFile("file")
	log.Println(file)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	token := auth.GenerateSecureToken(10)
	//filename := "./__STORAGE__/" + token
	err = fasthttp.SaveMultipartFile(file, token)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.SendString(token)
}

type addSongInput struct {
	Name   string `json:"name" validate:"required"`
	Author string `json:"author" validate:"required"`
	Genre  string `json:"genre" validate:"required"`
	Image  any    `json:"image"`
}

func addSong(c *fiber.Ctx) error {
	loggedUser := auth.GetLoggedUser(c)
	if loggedUser == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}

	data := addSongInput{}
	err := c.BodyParser(&data)
	log.Println(data)
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
