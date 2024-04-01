import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import {
  createLocalStorage, createUserStorage,
  getAllLocalStorage, getUserData
} from './services/storage';
import { ValidateContextProvider } from './components/ValidateContext';

function App() {

  !getAllLocalStorage() && createLocalStorage();
  !getUserData() && createUserStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ValidateContextProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </ValidateContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
