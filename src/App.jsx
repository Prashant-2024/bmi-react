import React, { useState } from "react";

function App() {
  const [weightValue, setWeightValue] = useState(50);

  const [heightValue, setHeightValue] = useState(120);

  const [bmi, setBmi] = useState(0);

  function bmiFunction() {
    let bmi = weightValue / (heightValue / 100) ** 2;
    setBmi(bmi);
    console.log(bmi);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // bmiFunction();
  }

  return (
    <main className="mx-auto min-h-screen flex flex-col justify-center items-center bg-backgroundImage">
      <div className="bg-white px-10 py-8 shadow-2xl rounded-2xl w-1/3">
        <h1 className="text-3xl font-bold mb-3 p-2">BMI Calculator</h1>
        <div className="flex flex-col px-4 py-2 mt-2">
          <div className="flex flex-col py-2 px-5">
            <label htmlFor="weight" className="text-xl font-semibold">
              Weight: <span className="text-green-500">{weightValue}</span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              name="weight"
              id="weight"
              onInput={(e) => setWeightValue(e.target.value)}
              value={weightValue}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="height" className="text-xl font-semibold">
              Height: <span className="text-green-500">{heightValue}</span>
            </label>
            <input
              type="range"
              min="80"
              max="240"
              name="height"
              id="height"
              onInput={(e) => setHeightValue(e.target.value)}
              value={heightValue}
            />
          </div>
          <p>Your BMI is {bmi.toFixed(2)}</p>
          <button className="bg-blue-400" onClick={bmiFunction}>
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
