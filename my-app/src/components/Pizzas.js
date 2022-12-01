import React, { useEffect, useState } from "react";
/* import pizzas from "./../data/pizza_data"; */
import Pizza from "./Pizza";

function Pizzas() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(function () {
    fetch("http://127.0.0.1:9000")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPizzas(data);
      });
  }, []);
  /* ez így még nem működik, mert a böngésző nem hagyja, hogy egy url egy másikat hivogasson --> felrakjuk a cors-t a backendre */
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
