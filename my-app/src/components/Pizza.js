import React, { useState } from "react";
import "./Pizza.css";

function Pizza({ id, name, picture, ingredients, price }) {
  /*   const pizzaName = pizzaData.name;
  const { name } = pizzaData;
  destructuring alternatívák, ha a props-ban az van, hogy pizzaData */

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={"pizza" + (isFavorite ? " fav" : "")}>
      {/*       conditional rendering: state-en múlik, hogy megkap-e class-t ergó megjelenik-e */}
      <img
        onClick={() => setIsFavorite(!isFavorite)}
        /* eredetileg true volt, de így mindig az isFavorite ellentétére vált */
        src="https://as1.ftcdn.net/v2/jpg/01/09/84/42/1000_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
        alt="kedvenc"
        className="favorite"
      />
      <h1>
        {name} (id: {id})
      </h1>
      <p>összetevők: {ingredients}</p>
      <p>ár: {price}</p>
      <p>{isFavorite ? "Kedvenc" : "Nem kedvenc"}</p>
    </div>
  );
}

export default Pizza;
