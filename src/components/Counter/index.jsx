import React from "react";

import "./index.css";

const Counter = ({ quantity, onMore, onLess }) => {
  return (
    <div className="counter">
      <button className="counter-button" onClick={onLess}>
        -
      </button>

      <div className="counter-display">{quantity}</div>

      <button className="counter-button" onClick={onMore}>
        +
      </button>
    </div>
  );
};

export default Counter;
