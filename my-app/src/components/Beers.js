import React from "react";
import Beer from "./Beer";

function Beers({ data }) {
  return (
    <div>
      {data.map((beer, index) => {
        return <Beer key={index} index={index} beerData={beer} />;
        /* a key-t csak a react kapja meg, ha szeretnénk használni, akkor index-ként is át kell adni */
      })}
    </div>
  );
}

export default Beers;
