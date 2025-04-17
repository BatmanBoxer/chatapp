package handlers

import (
	"log"
	"net/http"
	"github.com/batmanboxer/chatapp/models"
	"github.com/gorilla/websocket"
)

type WebSocketService interface {
	WebsocketAddClient(conn *websocket.Conn, chatRoomId string, userId string)
}

type AuthService interface {
	AuthLogin(models.LoginData) (string, error)
	AuthSignUp(models.SignUpData) error
}

type Handlers struct {
	AuthManager AuthService
	ChatManager WebSocketService
}

func NewHandlers(
	authManager AuthService,
	webSocketManager WebSocketService,
) *Handlers {
	return &Handlers{
		AuthManager: authManager,
		ChatManager: webSocketManager,
	}
}

type customHttpHandler func(http.ResponseWriter, *http.Request) error

func (h *Handlers) WrapperHandler(customHandler customHttpHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := customHandler(w, r)
		if err != nil {
			log.Printf("error: %s\n", err.Error())
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
	}
}


