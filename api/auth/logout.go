package auth

import (
	"log"
	"spotilie-api/db"

	"github.com/gofiber/fiber/v2"
)

func LogOut(c *fiber.Ctx) error {
	session := GetLoggedSession(c)
	if session == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}

	err := db.Client.Session.DeleteOneID(session.ID).Exec(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.SendStatus(fiber.StatusOK)
}
