import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ENVS } from '../config/envs';

console.log(`${ENVS.VITE_API_URL}/graphql`)
const apolloClient = new ApolloClient({
    uri: `${ENVS.VITE_API_URL}/graphql`,
    cache: new InMemoryCache(),
});

export default apolloClient;
