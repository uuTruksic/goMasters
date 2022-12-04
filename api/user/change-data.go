package user

import (
	"log"
	"spotilie-api/auth"

	"github.com/gofiber/fiber/v2"
)

type ChangeDataInput struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

func ChangeData(c *fiber.Ctx) error {
	loggedUser := auth.GetLoggedUser(c)
	if loggedUser == nil {
		return c.SendStatus(fiber.StatusForbidden)
	}

	data := ChangeDataInput{}
	err := c.BodyParser(&data)
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusBadRequest)
	}

	user, err := loggedUser.Update().SetName(data.Name).SetEmail(data.Email).Save(c.Context())
	if err != nil {
		log.Println(err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.JSON(user)
}
