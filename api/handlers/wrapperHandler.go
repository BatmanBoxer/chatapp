package handlers

import (
	"context"
	"log"
	"net/http"
	"github.com/batmanboxer/chatapp/internals/authentication"
	"github.com/batmanboxer/chatapp/api/chat"
	"github.com/batmanboxer/chatapp/common"
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
	authManager *auth.AuthManager,
	webSocketManager *chat.WebSocketManager,
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

func (h *Handlers) AuthenticationMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// authHeader := r.Header.Get("Authorization")
		// if authHeader == "" {
		// 	http.Error(w, "Authorization header required", http.StatusUnauthorized)
		// 	return
		// }
		//
		// userId, err := auth.ValidateJwt(authHeader)
		// if err != nil {
		// 	http.Error(w, "Invalid JWT", http.StatusUnauthorized)
		// }
		// //also check if this user exists in userdatabase
		//remove this fake userId later
		userId := "test"
		ctx := context.WithValue(r.Context(), common.CONTEXTIDKEY, userId)

		next(w, r.WithContext(ctx))
	}
}
