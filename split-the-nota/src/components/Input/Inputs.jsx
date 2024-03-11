import React, { useState } from "react";
import "./inputs.css";

const Inputs = () => {
  const [formData, setFormData] = useState({
    sum: 0,
    friends: 0,
    tip: 0,
  });

  const [totalExpense, setTotalExpense] = useState(0); // State to store total expense

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { sum, friends, tip } = formData;
    const calculatedExpense =
      (parseFloat(sum) * parseFloat(tip) + parseFloat(sum)) / parseInt(friends);
    setTotalExpense(calculatedExpense); // Update totalExpense state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sum">Summa</label>
        <input
          type="text"
          id="sum"
          name="sum"
          value={formData.sum}
          onChange={handleInputChange}
        />
        <label htmlFor="amount">Antal vänner</label>
        <input
          type="text"
          id="amount"
          name="friends"
          value={formData.friends}
          onChange={handleInputChange}
        />
        <label htmlFor="tip">Dricks</label>
        <input
          type="text"
          id="tip"
          name="tip"
          value={formData.tip}
          onChange={handleInputChange}
        />
        <button type="submit">Räkna</button>
        <p>{totalExpense}</p> {/* Display totalExpense from state */}
      </form>
    </div>
  );
};

export default Inputs;
