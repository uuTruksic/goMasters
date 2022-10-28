package db

import (
	"context"
	"spotilie-api/ent"
)

var Client *ent.Client

func Connect() {
	var err error
	Client, err = ent.Open("mysql", "root:@tcp(localhost:3306)/spotilie?parseTime=true")
	if err != nil {
		panic(err)
	}

	err = Client.Schema.Create(context.Background())
	if err != nil {
		panic(err)
	}
}
