import React, { useState } from "react";

export const NestedObject = () => {
  const [object, setObject] = useState({
    name: "John Doe",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });
  const updateNestedObject = () => {
    setObject({
      ...object,
      address: {
        ...object.address,
        street: "123 Main Street",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105",
      },
    });
  };

  return (
    <div>
      <h1>{object.name}</h1>
      <p>{object.address.street}</p>
      <p>
        {object.address.city},{object.address.state}
        {object.address.zipCode}
      </p>
      <button onClick={updateNestedObject}>Update Nested Object</button>
    </div>
  );
};
