import {React, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    let [category, setCategory] = useState("All")

    //if we were to extrapolate setCategory(e.target.value), 
    //what it does is set the current state to the value that we are targeting when we change the selector 
    //so for instance onChange -> if you select Produce, category = Produce

    let filterItems = items.filter((item)=> {
        if (category === "All") {
            return true
        } else {
            return category === item.category

        }
    })

    //filterItems essentially returns either the entire items array, or a new array whose category within each element is equal to the current state of category.


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setCategory(e.target.value)}> 
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
