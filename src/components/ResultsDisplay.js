import React from "react";
import dollar from "../images/icon-dollar.svg";

const ResultsDisplay = ({ tipAmount, totalPerPerson }) => {
  return (
    <div className="results">
      <div className="result">
        <div className="results-total">
          <h2>Tip Amount</h2>
          <p className="results-para">/ person</p>
        </div>
        <span>
          <img src={dollar} alt="Dollar sign" className="result-dollar" />
          {tipAmount.toFixed(2)}
        </span>
      </div>
      <div className="result">
        <div className="results-total">
          <h2>Total</h2>
          <p className="results-para">/ person</p>
        </div>
        <span>
          <img src={dollar} alt="Dollar sign" className="result-dollar" />
          {totalPerPerson.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ResultsDisplay;
