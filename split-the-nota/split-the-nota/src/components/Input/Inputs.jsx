import React from "react";
import "./inputs.css";

const Inputs = () => {
  let newSum;
  let newFriends;
  let newTip;

  const handleSumChange = (event) => {
    newSum = parseFloat(event.target.value);
    console.log(newSum);
  };

  const handleFriendsChange = (event) => {
    newFriends = parseInt(event.target.value);
    console.log(newFriends);
  };

  const handleTipChange = (event) => {
    newTip = parseFloat(event.target.value);
    console.log(newTip);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const totalExpense = (newSum * newTip + newSum) / newFriends;
    console.log(totalExpense);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sum">Summa</label>
        <input type="text" id="sum" onChange={handleSumChange} />
        <label htmlFor="amount">Antal vänner</label>
        <input type="text" id="amount" onChange={handleFriendsChange} />
        <label htmlFor="tip">Dricks</label>
        <input type="text" id="tip" onChange={handleTipChange} />
        <button type="submit">Räkna</button>
      </form>
    </div>
  );
};

export default Inputs;
