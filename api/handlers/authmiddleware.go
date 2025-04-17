package handlers

import (
	"context"
	"net/http"
	"github.com/batmanboxer/chatapp/common"
)

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
