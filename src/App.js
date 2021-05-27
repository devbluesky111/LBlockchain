import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Index from './pages';
const App = () => {
    return (
      <>
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
      </>
    );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;