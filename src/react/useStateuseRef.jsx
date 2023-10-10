import React, { useRef, useState } from "react";

const UseStateUseRef = () => {
  const inputRef = useRef("");
  const [name, setName] = useState("");

  const focusInput = (e) => {
    console.log(inputRef.current.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Input</h1>
      <input type="text" value={name} onChange={focusInput} ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseStateUseRef;
