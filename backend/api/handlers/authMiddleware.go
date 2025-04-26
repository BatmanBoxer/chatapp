package handlers

import (
	"context"
	"github.com/batmanboxer/chatapp/api/features/authentication"
	"github.com/batmanboxer/chatapp/common"
	"log"
	"net/http"
)

func (h *Handlers) AuthenticationMiddleware(next customHttpHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Authorization header required", http.StatusUnauthorized)
			return
		}

		userId, err := auth.ValidateJwt(authHeader)
		if err != nil {
			http.Error(w, "Invalid JWT", http.StatusUnauthorized)
		}
		log.Printf("userID = %s", userId)

		_, err = h.AuthManager.AuthGetUserById(userId)
		if err != nil {
			http.Error(w, "User Account Is Deleted By Admin", http.StatusUnauthorized)
      return
		}

		ctx := context.WithValue(r.Context(), common.CONTEXTUSERIDKEY, userId)

		err = next(w, r.WithContext(ctx))

		if err != nil {
			log.Printf("error: %s\n", err.Error())
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
      return
		}

	}
}
