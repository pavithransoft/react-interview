import React, { useState } from "react";

export function Array() {
  const [myArray, setMyArray] = useState([]);

  return (
    <div>
      <button onClick={() => setMyArray([...myArray, "new item"])}>
        Add item
      </button>
      <ul>
        {myArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
