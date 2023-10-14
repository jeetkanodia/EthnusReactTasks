import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div className="main">
      <div className="center">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          className="textarea"
          value={text}
          name="text"
          id="text"
          cols="50"
          rows="10"
          onChange={(e) => {
            setText(e.target.value);
            setCount(e.target.value.split(" ").length);
          }}
        ></textarea>
        <p className="count">Word Count: {count}</p>
      </div>
    </div>
  );
};

export default App;
