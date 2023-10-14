import React from "react";
import { useState, useEffect } from "react";
const ColorPicker = ({ colorArray }) => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="wrapper">
        <h1 style={{ marginBottom: "20px" }}>Color Picker</h1>
        <div className="colorwrapper">
          <div className="colors">
            {click
              ? colorArray.map((color) => (
                  <button
                    onClick={() => {
                      handleClick(), setColor(color);
                    }}
                    className="colorbutton"
                    style={{ backgroundColor: color }}
                    key={color}
                  ></button>
                ))
              : null}
          </div>
          <button
            style={{ backgroundColor: color }}
            className="button"
            onClick={handleClick}
          >
            Pick a color
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
