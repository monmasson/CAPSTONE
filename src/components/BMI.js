import React, { useState } from "react";
import '../styling/bmi.css'

const BMI  = () => {
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = (mass/ ((height * height) 
    / 10000)).toFixed(2); //toFixed() converts a number to a string, rounded to a specified number of decimals
    setBmi(bmi);
    
  };

//   if (bmi < 18.6) {
    // return
//             `Under Weight : <span>${bmi}</span>`;
  
//        } else if 
    // (bmi >= 18.6 && bmi < 24.9) {
//     `Normal : <span>${bmi}</span>`};
  
//         else {
//             `Over Weight : <span>${bmi}</span>}

  return (
    <div class="container">
        <h1>BMI Calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Height (in cm)</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <div>
          <label>Weight (in kg)</label>
          <input value={mass} onChange={(e) => setMass(e.target.value)} />
        </div>

        <button type="submit">calculate</button>
      </form>
      <p>
      <label>Your BMI value</label>
        <input type="text" value= {bmi}/></p>
      <p className="results"> 
      <label>Interpertation</label>
      <br></br> 
     
        {
         bmi < 18.6 ? `Under Weight `:bmi >= 18.6 && bmi < 24.9? <span>Normal BMI</span>:`Over Weight`
        }
      </p>
    </div>
  );
}
export default BMI