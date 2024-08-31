import React from "react";

const ResultsDisplay = ({ tipAmount, totalPerPerson }) => {
  return (
    <div className="results">
      <div className="result">
        <h2>Tip Amount</h2>
        <p>${tipAmount.toFixed(2)}</p>
      </div>
      <div className="result">
        <h2>Total</h2>
        <p>${totalPerPerson.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ResultsDisplay;
