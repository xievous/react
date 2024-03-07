import React from "react";
import "./form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [checked, setChecked] = useState(false);
  const [trainClass, setClass] = useState("");
  const [selectedTicket, setSelectedTicket] = useState("");
  const [selectedAge, setSelectedAge] = useState("");

  const onClassSelected = (e) => {
    setClass(e.target.value);
  };
  const handleClick = () => setChecked(!checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(name + surname + checked + trainClass + selectedTicket + selectedAge);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          value="2"
          id="2"
          checked={trainClass === "2"}
          onChange={onClassSelected}
        />
        <label htmlFor="2">2:a</label>
        <input
          type="radio"
          value="1"
          id="1"
          checked={trainClass === "1"}
          onChange={onClassSelected}
        />
        <label htmlFor="1">1:a</label>
        <p>Antal biljetter</p>
        <select
          onChange={(e) => {
            const selectedTicketAmount = e.target.value;
            setSelectedTicket(selectedTicketAmount);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>Ålder</p>
        <select
          onChange={(e) => {
            const selectedAgeType = e.target.value;
            setSelectedAge(selectedAgeType);
          }}
        >
          <option value="Vuxen">Vuxen</option>
          <option value="Ungdom">Ungdom</option>
          <option value="Barn">Barn</option>
          <option value="Student">Student</option>
          <option value="Senior">Senior</option>
        </select>
        <p>Förnamn</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Efternamn</p>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input type="checkbox" onChange={handleClick} checked={checked} />{" "}
        Godkänner villkoren
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
