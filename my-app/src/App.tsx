import React from "react";
import "./App.css";
import { useState } from "react";
import { PRODUCTS } from "./CONSTS";
import { ItemList } from "./components/itemList/ItemList";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";

function App() {
  const [items, setItems] = useState(PRODUCTS);
  const [filteredItems, setFilteredItems] = useState(items);
  const [input, setInput] = useState("");

  return (
    <div className='App'>
      <Header />
      <Nav
        input={input}
        setInput={setInput}
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        items={items}
      />
      <ItemList filteredItems={filteredItems} />
    </div>
  );
}

export default App;
