import React, { useState } from "react";

function Button() {
  const [numberState, setNumberState] = useState(1);

  let number = 1;
  return (
    <>
      <button
        onClick={() => {
          number = number + 1;
          console.log(number);
        }}
      >
        Button {number}
      </button>
      <button
        onClick={() => {
          setNumberState(numberState + 1);
        }}
      >
        state button {numberState}
      </button>
    </>
  );
}

export default Button;
