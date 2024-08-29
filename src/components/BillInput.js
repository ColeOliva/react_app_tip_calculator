import React from "react";
import dollar from "../images/icon-dollar.svg";

const BillInput = ({ billAmount, setBillAmount }) => {
  const handleBillChange = (e) => {
    const value = e.target.value;
    // Ensure that the input is a number and within reasonable range
    if (!isNaN(value) && value >= 0) {
      setBillAmount(parseFloat(value));
    }
  };
  return (
    <div className="total-bill">
      <label className="bill-text">
        Bill
      </label>
      <div className='bill-field'>
        <img src={dollar} alt="Dollar sign" className="dollar-icon" />
        <input
          type="text"
          id="bill-input"
          className="bill-input"
          value={billAmount || ""}
          onChange={handleBillChange}
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default BillInput;
