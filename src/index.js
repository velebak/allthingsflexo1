import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios("http://api.allthingsflexo.com/items");
    setData(result);
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data.map(i => (
          <li key={i.id}>
            <a href={i.imageUrl}>{i.description}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
