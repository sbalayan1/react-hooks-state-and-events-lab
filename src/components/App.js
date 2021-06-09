import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(false)

  let changeMode = mode ? true : false

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);


  //you are able to adjust the div element by changing the conditional in the ternary function to a separate function that changes based on its state. 
  return (
    <div className={"App " + (changeMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setMode(!mode)}>Change Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
