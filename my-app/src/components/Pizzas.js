import React from "react";
import pizzas from "./../data/pizza_data";
import Pizza from "./Pizza";

function Pizzas() {
  return (
    <div>
      {pizzas.map((pizza) => (
        <Pizza
          key={pizza.id}
          name={pizza.name}
          id={pizza.id}
          ingredients={pizza.ingredients}
          price={pizza.price}
          picture={pizza.picture}
        />
      ))}
    </div>
  );
}

export default Pizzas;
