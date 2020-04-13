import React from 'react';
import Router from './routers/Router';
import ProductsProvider from './contexts/ProductsContext';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductsProvider>
          <Header />
          <Router />
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
