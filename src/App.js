import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from "react-redux";
import Index from './pages';
import { LOGOUT } from './redux/actions/types';
import { Web3ReactProvider } from '@web3-react/core'
import { loadUser } from './redux/actions/authAction';
import setAuthToken from './@utils/setAuthToken';
import store from './store';

const App = () => {

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <>
      <Web3ReactProvider>
        <Provider store={store}>
          <BrowserRouter>
              <Route component={ScrollToTop} />
              <ThemeProvider
                value={{
                  data: 'dark'
                }}
              >
                <Index />
              </ThemeProvider>
            </BrowserRouter>
        </Provider>
      </Web3ReactProvider>
    </>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;