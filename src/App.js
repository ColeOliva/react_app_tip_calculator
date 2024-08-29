import React, { useState } from 'react';
import './App.css';
import BillInput from './components/BillInput';
import PeopleInput from './components/PeopleInput';
import ResetButton from './components/ResetButton';
import ResultsDisplay from './components/ResultsDisplay';
import TipSelector from './components/TipSelector';

function App() {
    const [bill, setBill] = useState(0); // Set the initial bill amount to 0
    const [tipPercentage, setTipPercentage] = useState(15); // Set the initial tip percentage to 15
    const [numberOfPeople, setNumberOfPeople] = useState(1); // Set the initial number of people to 1

    const handleBillChange = (e) => setBill(parseFloat(e.target.value)); // Update the bill amount
    const handleTipChange = (percentage) => setTipPercentage(percentage); // Update the tip percentage
    const handlePeopleChange = (e) => setNumberOfPeople(parseInt(e.target.value)); // Update the number of people

    const tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople; // Calculate the tip amount per person
    const totalPerPerson = (bill / numberOfPeople) + tipAmount; // Calculate the total amount per person

    return (
        <div className="App">
            <h1>SPLI<br/>TTER</h1>
            <div className="calculator-container">
                <div className="input-section">
                    <BillInput value={bill} onChange={handleBillChange} /> 
                    <TipSelector selectedTip={tipPercentage} onChange={handleTipChange} />
                    <PeopleInput value={numberOfPeople} onChange={handlePeopleChange} />
                </div>
                <div className="result-section">
                    <ResultsDisplay tipAmount={tipAmount} totalPerPerson={totalPerPerson} />
                    <ResetButton onReset={() => { setBill(0); setTipPercentage(15); setNumberOfPeople(1); }} />
                </div>
            </div>
        </div>
    );
}

export default App;