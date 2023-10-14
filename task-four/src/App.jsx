import "./App.css";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setData(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrapper">
      <h1 className="heading">Dummy data</h1>
      <div className="table">
        <table>
          <tbody>
            <tr className="table">
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{ height: "10vh", width: "10vh" }}
                      src={item.image}
                      alt="image"
                    />
                  </td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.domain}</td>
                  <td>{item.ip}</td>
                  <td>{item.university}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
