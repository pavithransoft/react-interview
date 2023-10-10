import React, { useEffect, useState } from "react";

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This function will only run when the count state variable changes
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <h1>The count is {count}</h1>
    </div>
  );
};

export default UseEffectCounter;
