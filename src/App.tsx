import React from 'react';
import Router from './routers/Router';
import ProductsProvider from './contexts/ProductsContext';
import CartProvider from './contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <Header />
            <Router />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
