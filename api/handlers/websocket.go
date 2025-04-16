package handlers

import (
	"errors"
	"net/http"
	"github.com/batmanboxer/chatapp/common"
	//"github.com/gorilla/mux"
	gorrilaWebsocket "github.com/gorilla/websocket"
)

var upgrader = gorrilaWebsocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func (h *Handlers) WebsocketHandler(w http.ResponseWriter, r *http.Request) error {
	// vars := mux.Vars(r)
	// chatroomId := vars["id"]
	chatroomId := "test"
	userId := r.Context().Value(common.CONTEXTIDKEY)
	stringUserId, ok := userId.(string)

	if !ok {
		return errors.New("User Id Invalid")
	}

	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		return err
	}

	h.ChatManager.WebsocketAddClient(conn,chatroomId,stringUserId)
	return nil
}
