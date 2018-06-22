import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

function urlBase () {
  let uri = 'https://agropop-api.herokuapp.com/graphql'

  if (process.env.NODE_ENV === 'development') {
    uri = 'http://localhost:5000/graphql'
  }

  return uri
}

export default new ApolloClient({
  link: new HttpLink({ uri: urlBase() }),
  cache: new InMemoryCache(),
  connectToDevTools: true
})
