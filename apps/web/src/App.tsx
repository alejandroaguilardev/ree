import AppRouter from './routes/AppRouter'
import { ApolloProvider } from '@apollo/client';
import apolloClient from './graphql/apolloClient';
import './styles/global.css'

function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  )
}

export default App
