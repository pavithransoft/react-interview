import React, { useState } from "react";
export const Object = () => {
  const [object, setObject] = useState({});
  // Update the object to set the name property to "John Doe".
  const updateObject = () => {
    setObject({ ...object, name: "John Doe" });
  };
  return (
    <div>
      <h1>{object.name}</h1>
      <button onClick={updateObject}>Update Object</button>
    </div>
  );
};
