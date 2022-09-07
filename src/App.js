import React from 'react';
import './App.css';
import Store from './components/Store';
import { products } from './components/products'

console.log(products)

function App() {
  return (
    
      <div className="window">
        <Store products={products} />
      </div>
   
  );
}

export default App;
