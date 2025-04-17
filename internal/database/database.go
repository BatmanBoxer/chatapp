package database

import "github.com/batmanboxer/chatapp/models"

type Storage interface {
	AddAccount(models.SignUpData) error
	GetUserByEmail(string) (models.AccountModel, error)
	GetMessages(string, int, int) ([]models.MessageModel, error)
	AddMessage(messageModel models.MessageModel) error
}
