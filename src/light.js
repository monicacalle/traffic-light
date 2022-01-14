import React, { useState } from "react";

const Light = (props) => {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={props.color + " " + (show ? "active" : null)}
    ></div>
  );
};

export default Light;
