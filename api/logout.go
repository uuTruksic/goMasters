package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
)

func LogOut(c *fiber.Ctx) error {
	session := GetLogedSession(c)
	if session == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}
	err := Client.Session.DeleteOneID(session.ID).Exec(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.SendStatus(fiber.StatusOK)
}
