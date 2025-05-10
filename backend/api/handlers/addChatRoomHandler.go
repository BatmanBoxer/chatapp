package handlers

import (
	"errors"
	"io"
	"net/http"
	"github.com/batmanboxer/chatapp/common"
	"github.com/batmanboxer/chatapp/protomodels"
	"github.com/google/uuid"
	"google.golang.org/protobuf/proto"
)

func (h *Handlers) AddChatRoomHanlder(w http.ResponseWriter, r *http.Request) error {

	userId := r.Context().Value(common.CONTEXTUSERIDKEY)
	stringUserId, ok := userId.(string)

	if !ok {
		return errors.New("User Id Invalid")
	}

	user1Uuid, err := uuid.Parse(stringUserId)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return nil
	}

	binary, err := io.ReadAll(r.Body)

	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return nil
	}

	protoUserData := protomodels.AddChatRoomRequest{}
	err = proto.Unmarshal(binary, &protoUserData)
	if err != nil {
		return err
	}

	user2 := protoUserData.Participant
	user2Uuid, err := uuid.Parse(user2)

	_, err = h.AuthManager.AuthGetUserById(user2)

	if err != nil {
		http.Error(w, "User Doesnt Exists", http.StatusNotFound)
		return nil
	}

	exists := h.ChatManager.CheckChatRoomExistsBtwnUsers(user1Uuid, user2Uuid)

	if exists {
		http.Error(w, "User Doesnt Exists", http.StatusConflict)
		return nil
	}

	users := []uuid.UUID{}

	users = append(users, user1Uuid)
	users = append(users, user2Uuid)

	err = h.ChatManager.AddChatRoom(users)

	if err != nil {
		http.Error(w, "User Doesnt Exists", http.StatusInternalServerError)
		return nil
	}

	w.Write([]byte("User Added to Chat Room"))

	return nil
}
