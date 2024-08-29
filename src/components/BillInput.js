import React from "react";
import dollar from "../images/icon-dollar.svg";

const BillInput = ({ billAmount, setBillAmount }) => {
  const handleBillChange = (event) => {
    const value = event.target.value;
    // Ensure that the input is a number and within reasonable range
    if (!isNaN(value) && value >= 0) {
      setBillAmount(parseFloat(value));
    }
  };
  return (
    <div className="total-input">
      <label className="input-text">
        Bill
      </label>
      <div className='input-field'>
        <img src={dollar} alt="Dollar sign" className="input-icon" />
        <input
          type="number"
          step="0.01"
          id="people-input"
          className="input-box"
          value={billAmount || ""}
          onChange={handleBillChange}
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default BillInput;
