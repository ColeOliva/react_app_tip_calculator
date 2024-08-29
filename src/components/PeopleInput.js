import React from "react";
import person from "../images/icon-person.svg";

const PeopleInput = ({ numberOfPeople, setNumberOfPeople }) => {
  const handlePeopleChange = (event) => {
    const value = event.target.value;
    // Ensure that the input is a number and within reasonable range
    // so no need for error
    if (!isNaN(value) && value >= 0 && value < 100) {
      setNumberOfPeople(parseInt(value));
    }
  };
  return (
    <div className="total-input">
      <label className="input-text">Number of People</label>
      <div className="input-field">
        <img src={person} alt="person" className="input-icon" />
        <input
          type="number"
          step="1"
          id="people-input"
          className="input-box"
          value={numberOfPeople || ""}
          onChange={handlePeopleChange}
          placeholder="1"
        />
      </div>
    </div>
  );
};

export default PeopleInput;
