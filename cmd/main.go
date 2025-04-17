package main

import (
	"log"
	"github.com/batmanboxer/chatapp/api/server"
	"github.com/batmanboxer/chatapp/internal/postgres"
)


func main() {
	postgress, err := postgress.NewPostGres()

	if err != nil {
		log.Fatal("Cound Not Establish a Connection to Database", err.Error())
	}
  
	Api := server.NewApi(":4000", postgress)

	Api.StartApi()
}
