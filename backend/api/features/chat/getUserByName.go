package chat

import (
	"github.com/batmanboxer/chatapp/models"
)

func (h *WebSocketManager) GetUsersByName(userId string,name string) ([]models.ResponseAccountModel, error) {
	//check if user had permission to chat that other user and stuff late
	//i know this is unnessary abtraction but later maybe useful

	accounts, err := h.ChatStorage.GetUsersByName(name)
	responseAccounts := []models.ResponseAccountModel{}

	for _, account := range accounts {
    if account.ID.String() == userId {
      continue 
    }
		responseAccount := models.ResponseAccountModel{
      ID: account.ID,
      Name: account.Name,
      Email: account.Email,
      CreatedAt: account.CreatedAt,
      Verified: account.Verified,
    }
    responseAccounts = append(responseAccounts, responseAccount)
	}

	return responseAccounts, err

}
