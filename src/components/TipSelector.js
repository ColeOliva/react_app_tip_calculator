import React from "react";

const TipSelector = ({ selectedTip, onChange }) => {
    const tipPercentages = ["5%", "10%", "15%", "25%", "50%", "other"];

    return (
        <div className="tip-selector">
            {tipPercentages.map((percentage) => (
                <div
                    key={percentage}
                    className={`tip-square ${selectedTip === percentage ? 'selected' : ''}`}
                    onClick={() => onChange(percentage)}
                >
                    {percentage}%
                </div>
            ))}
        </div>
    );
};

export default TipSelector;
