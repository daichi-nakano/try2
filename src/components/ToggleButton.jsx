import React, { useEffect, useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Current state is", open);
    if (open) {
      console.log("Subscribe database");
    }
    return () => {
      console.log("Unsubscribe database");
    };
  });
  return (
    <div>
      <button onClick={toggle}>{open ? "open" : "close"}</button>
    </div>
  );
};

export default ToggleButton;
