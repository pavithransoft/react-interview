import React, { useState } from "react";
import { produce } from "immer";

export const ImmerCounter = () => {
  const [state, setState] = useState({
    count: 0,
    name: "Alice",
  });

  const increment = () => {
    setState(
      produce(state, (draft) => {
        draft.count++;
      })
    );
  };

  const changeName = () => {
    setState(
      produce(state, (draft) => {
        draft.name = "Bob";
      })
    );
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <h1>Name: {state.name}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};
