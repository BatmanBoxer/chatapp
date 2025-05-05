package models

import (
	"sync"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type MessageModel struct {
	Id        string    `json:"id"`
	SenderId  string    `json:"sender_id"`
	RoomId    string    `json:"room_id"`
	Text      string    `json:"message"`
	CreatedAt time.Time `json:"created_at"`
}

type Client struct {
	Id        string
	Conn      *websocket.Conn
	Messagech chan MessageModel
	Closech   chan struct{}
	Mutex     *sync.RWMutex
}

type ChatRoom struct {
	ID        int         `json:"id"`
	CreatedAt time.Time   `json:"created_at"`
	UserIDs   []uuid.UUID `json:"user_ids"`
}

type ResponseChatRoom struct {
	ID        int       `json:"id"`
	CreatedAt time.Time `json:"created_at"`
	UserId    uuid.UUID `json:"user_id"`
	Name      string    `json:"name"`
}

type AddChatRoomRequest struct {
	Participant uuid.UUID `json:"participant"`
}
