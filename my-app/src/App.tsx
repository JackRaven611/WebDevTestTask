import React from "react";
import "./App.css";
import { useState } from "react";
import { TEXTS, PRODUCTS } from "./CONSTS";
import { ItemList } from "./components/itemList/ItemList";

function App() {
  const [items, setItems] = useState(PRODUCTS);

  return (
    <div className='App'>
      <header>
        <h1>{TEXTS.header}</h1>
      </header>
      <div className='search'></div>
      <div className='filters'></div>
      <ItemList items={items} />
    </div>
  );
}

export default App;
