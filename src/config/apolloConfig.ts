import { ApolloClient, InMemoryCache } from '@apollo/client';

function apolloAuthorisation() {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
}

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  headers: apolloAuthorisation().headers,
});
