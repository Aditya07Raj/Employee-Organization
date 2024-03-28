import React, { useState } from "react";

const Home = (props) => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      setItems([inputText, ...items]);
      setInputText("");
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <div className="sidebar">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Department"
        />
        <button onClick={handleAddItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <header className="header"> hello vyhbhvh </header>
        <div>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
