import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from "react-redux";
import Index from './pages';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./redux/reducers";

const defaultState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(...middleware))
  );

const App = () => {
    return (
      <>
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
      </>
    );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;