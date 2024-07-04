 import React,{useState} from 'react';
 import imglogo from './assets/logo-png.png';
 import Table from './components/Table';
 import Form from './components/Form';
 import './App.css';
 
 const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (enteredData) => {
    setUserInput(enteredData);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
  }

  const resetHandler = () => {
    setUserInput(null);
  };

  return (
    <div>
      <header className="header">
        <img src={imglogo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <Form onCalculate={calculateHandler} onReset={resetHandler} />
      {!userInput && <p style={{ textAlign: "center" }}>No Data available.</p>}
      {userInput && (
        <Table data={yearlyData} initialInvestment={userInput.currentSavings} />
      )}
    </div>
  );
 }
 
 export default App
 
