package algolia

import "github.com/algolia/algoliasearch-client-go/algoliasearch"

// Algolia contains everything necessary to interact with algolia
type AlgoliaClient struct {
	Client algoliasearch.Client
	Index  algoliasearch.Index
}

var algoliaClient AlgoliaClient

// Init initialize the connection to Algolia
func Init(apiID, apiKey, indexName string) {
	algoliaClient.Client = algoliasearch.NewClient(apiID, apiKey)
	algoliaClient.Index = algoliaClient.Client.InitIndex(indexName)
}
