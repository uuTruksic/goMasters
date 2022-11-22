package user

import (
	"log"
	"spotilie-api/auth"
	"spotilie-api/db"

	"github.com/gofiber/fiber/v2"
)

func DeleteAccout(c *fiber.Ctx) error {
	loggedUser := auth.GetLoggedUser(c)
	if loggedUser == nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	err := db.Client.User.DeleteOneID(loggedUser.ID).Exec(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return nil
}
