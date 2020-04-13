import React from 'react';
import Router from './routers/Router';
import ProductsProvider from './contexts/ProductsContext';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProductsProvider>
          <Router />
        </ProductsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
