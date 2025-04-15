package server

import (
	"net/http"
	"sync"

	"github.com/batmanboxer/mockchatappre/api/handlers"
	"github.com/batmanboxer/mockchatappre/api/websocket"
	"github.com/batmanboxer/mockchatappre/internals/authentication"
	"github.com/batmanboxer/mockchatappre/models"
	"github.com/gorilla/mux"
)

type Storage interface {
	AddAccount(models.SignUpData) error
	GetUserByEmail(string) (models.AccountModel, error)
	GetMessages(string, int, int) ([]models.MessageModel, error)
	AddMessage(messageModel models.MessageModel) error
}

type Api struct {
	port    string
	storage Storage
	conn    map[string][]*models.Client
	mutex   *sync.RWMutex
}

func NewApi(port string, storage Storage) *Api {
	return &Api{
		port:    port,
		storage: storage,
		conn:    make(map[string][]*models.Client),
		mutex:   &sync.RWMutex{},
	}
}

func (api *Api) StartApi() {
	authManager := auth.AuthManager{
		AuthDb: api.storage,
	}

	webSocketManager := websocket.WebSocketManager{
		Storage: api.storage,
    Clients:map[string][]*models.Client{},
    Mutex: sync.RWMutex{},
	}

  handlers := handlers.NewHandlers(
    &authManager,
		&webSocketManager ,
	)

	mux := mux.NewRouter()

	mux.HandleFunc("/login", handlers.WrapperHandler(handlers.LoginHandler))
	mux.HandleFunc("/signup", handlers.WrapperHandler(handlers.SignUpHandler))
	mux.HandleFunc("/validate", handlers.WrapperHandler(handlers.ValidateHanlder))
	//mux.HandleFunc("/listen/{id}", handlers.AuthenticationMiddleware(handlers.WrapperHandler(handlers.WebSocketManager.WebsocketHandler)))
	mux.HandleFunc("/ws", handlers.AuthenticationMiddleware(handlers.WrapperHandler(handlers.WebSocketManager.WebsocketHandler)))

	http.ListenAndServe(":4000", mux)
}
