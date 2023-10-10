export const Event = () => {
  const handleClick = (event) => {
    alert("You clicked the button!");
    console.log("Button Clicked!!!");
  };

  return <button onClick={handleClick}>Click me!</button>;
};
