package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

// Song holds the schema definition for the Song entity.
type Song struct {
	ent.Schema
}

// Fields of the Song.
func (Song) Fields() []ent.Field {
	return []ent.Field{
		field.String("name"),
		field.String("author"),
		field.String("genre"),
	}
}

// Edges of the Song.
func (Song) Edges() []ent.Edge {
	return nil
}
