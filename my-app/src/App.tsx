import React from "react";
import "./App.css";
import { useState } from "react";
import { TEXTS, PRODUCTS } from "./CONSTS";
import { ItemList } from "./components/itemList/ItemList";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";

function App() {
	const [items, setItems] = useState(PRODUCTS);

	return (
		<div className='App'>
			<Header />
			<Nav />
			<ItemList items={items} />
		</div>
	);
}

export default App;
