import React, { useState } from "react";

function UseStateBasic() {
  const [text, setText] = useState("My Text");

  const handleClick = () => {
    if (text === "My Text") setText("Your Text");
    else setText("My Text");
  };

  return (
    <div>
      <h1>React "useState" Basic Example</h1>
      <h3>{text}</h3>

      <button onClick={handleClick}>Trigger Text</button>
    </div>
  );
}

export default UseStateBasic;
