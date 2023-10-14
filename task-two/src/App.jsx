import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  const [text, setText] = useState("20");
  const handleText = (e) => {
    if (e === "AC") {
      setText("");
    } else {
      setText(text + e);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="body">
          <div className="screen">
            <div className="display">{text}</div>
          </div>
          <div className="buttons">
            <div className="button-row">
              <button className="button" onClick={() => handleText("7")}>
                7
              </button>
              <button className="button" onClick={() => handleText("8")}>
                8
              </button>
              <button className="button" onClick={() => handleText("9")}>
                9
              </button>
              <button className="button" onClick={() => handleText("AC")}>
                AC
              </button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => handleText("4")}>
                4
              </button>
              <button className="button" onClick={() => handleText("5")}>
                5
              </button>
              <button className="button" onClick={() => handleText("6")}>
                6
              </button>
              <button className="button" onClick={() => handleText("%")}>
                %
              </button>
            </div>
            <div className="button-row">
              <button className="button" onClick={() => handleText("1")}>
                1
              </button>
              <button className="button" onClick={() => handleText("2")}>
                2
              </button>
              <button className="button" onClick={() => handleText("3")}>
                3
              </button>
              <button className="button" onClick={() => handleText("x")}>
                x
              </button>
            </div>
            <div className="button-row last">
              <button className="button left" onClick={() => handleText("0")}>
                0
              </button>
              <button className="button" onClick={() => handleText(".")}>
                .
              </button>
              <button className="button" onClick={() => handleText("=")}>
                =
              </button>
              <button className="button right" onClick={() => handleText("+")}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
