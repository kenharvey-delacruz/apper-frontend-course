Code Sandbox link for HW2 Submission:

https://codesandbox.io/s/homework-session-2-mscqqw

Code:
import React, { useState } from "react";

const Checklist = () => {
  const [checklist, setChecklist] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setChecklist(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (checklist.trim() !== "") {
      setItems((prevItems) => [...prevItems, checklist.trim()]);
      setChecklist("");
    }
  };

  const handleItemClick = (id) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== id));
  };

  return (
    <div>
      <h2>Checklist App</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={checklist}
          onChange={handleInputChange}
          placeholder="Enter anything here"
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
