import React, { useState } from "react";

const TipSelector = ({ selectedTip, setSelectedTip, onChange }) => {
  const [customTip, setCustomTip] = useState(""); // State for custom percentage

  const handleTipChange = (percentage) => {
    setSelectedTip(percentage);
    if (percentage !== "other") {
      setCustomTip(""); // Reset custom tip if another option is selected
      onChange(percentage);
  };
};

  const handleCustomTipChange = (event) => {
    // Ensure the input is a valid percentage
    if (!isNaN(event.target.value) && event.target.value >= 0) {
      setCustomTip(event.target.value);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && customTip.trim() !== "") {
        onChange(parseInt(customTip));
        setSelectedTip(parseInt(customTip));
    }
};

  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div className="tip-selector">
      <label className="tip-text">Select Tip %</label>
      {tipPercentages.map((percentage) => (
        <div
          key={percentage}
          className={`tip-square ${
            selectedTip === percentage ? "selected" : ""
          }`}
          onClick={() => handleTipChange(percentage)}
        >
          {percentage}%
        </div>
      ))}
      <div
        className={`tip-square ${selectedTip === "other" ? "selected" : ""}`}
        onClick={() => handleTipChange("other")}
      >
        {selectedTip === "other" ? (
          <input
            type="number"
            step="1"
            className="custom-tip-input"
            value={customTip}
            onChange={handleCustomTipChange}
            onKeyDown={handleKeyPress}
            placeholder="0"
            min="0"
          />
        ) : (
          "Other"
        )}
      </div>
    </div>
  );
};

export default TipSelector;
