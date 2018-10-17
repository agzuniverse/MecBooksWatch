package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"

	firebase "firebase.google.com/go"
	"github.com/blevesearch/bleve"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"google.golang.org/api/option"
)

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

type SearchReqData struct {
	Query string `json:"query"`
}

func main() {
	mapping := bleve.NewIndexMapping()
	index, err := bleve.New("textbooks.bleve", mapping)
	if err != nil {
		log.Fatal(err)
	}
	opt := option.WithCredentialsFile("./serviceaccount.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	r := mux.NewRouter()

	r.HandleFunc("/postbook", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		var reqdata PostReqData
		b, _ := ioutil.ReadAll(r.Body)
		fmt.Println(string(b))
		if err := json.Unmarshal(b, &reqdata); err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}
		client, err := app.Auth(context.Background())
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("error getting Auth client: " + err.Error()))
			return
		}
		idToken := reqdata.IDToken
		_, errr := client.VerifyIDToken(context.Background(), idToken)
		if errr != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("error verifying ID token: " + errr.Error()))
			return
		}
		if reqdata.Data.Author == "" || reqdata.Data.Title == "" {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("author and title should not be empty"))
			return
		}
		price, err := strconv.Atoi(reqdata.Data.Price)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}
		if price < 0 {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("price should not be negative"))
			return
		}
		if len(reqdata.Data.Contact) != 10 {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Phone number should contain 10 digits"))
			return
		}
		firestore, err := app.Firestore(context.Background())
		ref, _, err := firestore.Collection("textbooks").Add(context.Background(), reqdata.Data)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		} else {
			textbookID := ref.ID
			index.Index(textbookID, reqdata.Data)
			w.WriteHeader(http.StatusOK)
			w.Write([]byte("Textbook added successfully"))
		}
		defer firestore.Close()
	}).Methods("POST")

	r.HandleFunc("/search", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		var reqdata SearchReqData
		b, _ := ioutil.ReadAll(r.Body)
		if err := json.Unmarshal(b, &reqdata); err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			fmt.Printf("1:%v", err)
			return
		}
		query := bleve.NewFuzzyQuery(reqdata.Query)
		query.SetFuzziness(2)
		req := bleve.NewSearchRequest(query)
		result, err := index.Search(req)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			fmt.Printf("2:%v", err)
			return
		}
		fmt.Println(result)
		var resultTextbooks []Textbook
		for _, v := range result.Hits {
			firestore, err := app.Firestore(context.Background())
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				w.Write([]byte(err.Error()))
				fmt.Printf("3:%v", err)
				return
			}
			ch := make(chan Textbook)
			go func() {
				docsnap := firestore.Collection("textbooks").Doc(v.ID)
				datasnap, err := docsnap.Get(context.Background())
				if err != nil {
					w.WriteHeader(http.StatusInternalServerError)
					w.Write([]byte(err.Error()))
					fmt.Printf("4:%v", err)
					return
				}
				var textbook Textbook
				if err := datasnap.DataTo(&textbook); err != nil {
					w.WriteHeader(http.StatusInternalServerError)
					w.Write([]byte(err.Error()))
					fmt.Printf("5:%v", err)
					return
				}
				ch <- textbook

			}()
			for range result.Hits {
				resultTextbooks = append(resultTextbooks, <-ch)
			}
		}
		w.WriteHeader(http.StatusOK)
		jsonBody, _ := json.Marshal(resultTextbooks)
		w.Write([]byte(jsonBody))
	}).Methods("POST")

	r.HandleFunc("/deletebook", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		var reqdata DelReqData
		b, _ := ioutil.ReadAll(r.Body)
		if err := json.Unmarshal(b, &reqdata); err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		}
		fmt.Println(reqdata)
		client, err := app.Auth(context.Background())
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("error getting Auth client: " + err.Error()))
			return
		}
		idToken := reqdata.IDToken
		_, errr := client.VerifyIDToken(context.Background(), idToken)
		if errr != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("error verifying ID token: " + errr.Error()))
			return
		}
		firestore, err := app.Firestore(context.Background())
		_, err = firestore.Collection("textbooks").Doc(reqdata.ID).Delete(context.Background())
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte(err.Error()))
			return
		} else {
			index.Delete(reqdata.ID)
			w.WriteHeader(http.StatusOK)
			w.Write([]byte("Textbook Deleted successfully"))
		}
		defer firestore.Close()

	}).Methods("POST")

	corshandler := cors.Default().Handler(r)
	http.Handle("/", corshandler)
	log.Fatal(http.ListenAndServe(":"+os.Getenv("PORT"), nil))
	fmt.Println("Listening on " + os.Getenv("PORT") + "....")
}
