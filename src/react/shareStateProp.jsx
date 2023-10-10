import { useState } from "react";

// Parent component
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>

      <ChildComponent count={count} />
    </div>
  );
};

// Child component
const ChildComponent = ({ count }) => {
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default ParentComponent;
