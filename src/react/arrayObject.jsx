import React, { useState } from "react";

export function ArrayObject() {
  const [list, setList] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Carol" },
  ]);

  const updateList = (id, newValue) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, ...newValue };
      }
      return item;
    });
    setList(updatedList);
  };

  return (
    <div>
      <h1>List</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button onClick={() => updateList(1, { name: "Dave" })}>
        Update Alice's name
      </button>
    </div>
  );
}
