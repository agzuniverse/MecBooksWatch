package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	firebase "firebase.google.com/go"
	"github.com/aswinmprabhu/BooksWatch/search-indexing-server/algolia"
	"github.com/aswinmprabhu/Bookswatch/search-indexing-server/handlers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"google.golang.org/api/option"
)

// Textbook represents a book on Algolia and Firebase
type Textbook struct {
	Title     string `json:"title" firestore:"title"`
	Author    string `json:"author" firestore:"author"`
	Price     string `json:"price" firestore:"price"`
	Contact   string `json:"contact" firestore:"contact"`
	UserClass string `json:"userClass" firestore:"userClass"`
	IsOnWa    bool   `json:"isOnWa" firestore:"isOnWa"`
	UID       string `json:"uid" firestore:"uid"`
	Email     string `json:"email" firestore:"email"`
	Username  string `json:"username" firestore:"username"`
	Year      string `json:"year" firestore:"year"`
	Branch    string `json:"branch" firestore:"branch"`
	ImageURL  string `json:"imageURL" firestore:"imageURL"`
	FileID    string `json:"fileID" firestore:"fileID"`
}

type PostReqData struct {
	IDToken string   `json:"idToken"`
	Data    Textbook `json:"data"`
}

type DelReqData struct {
	IDToken string `json:"idToken"`
	ID      string `json:"bookID"`
}

func main() {
	// Set up Firebase
	opt := option.WithCredentialsFile("./serviceaccount.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	// Initialize Algolia
	algolia.Init(os.Getenv("API_ID", os.Getenv("API_KEY"), os.Getenv("INDEX_NAME")))

	// Create new router
	r := mux.NewRouter()
	r.HandleFunc("/postbook", handlers.PostBookHandler).Methods("POST")
	r.HandleFunc("/deletebook", handlers.DeleteBookHandler).Methods("POST")

	// Set cors headers and start server
	corshandler := cors.Default().Handler(r)
	http.Handle("/", corshandler)
	log.Fatal(http.ListenAndServe(":"+os.Getenv("PORT"), nil))
	fmt.Println("Listening on " + os.Getenv("PORT") + "....")
}
