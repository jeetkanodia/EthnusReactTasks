import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./App.css";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState("");
  const handleClick = () => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div className="wrapper">
      <h1>Age Calculator</h1>
      <p>Enter the date of birth</p>
      <div className="calender">
        <DatePicker value={date} onChange={setDate} />
      </div>
      <button onClick={handleClick} className="button">
        Calclate Age
      </button>
      <p>{age === "" ? "" : `Your are ${age} year old`}</p>
    </div>
  );
};

export default App;
