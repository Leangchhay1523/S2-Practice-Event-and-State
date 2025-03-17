import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState("")
  const [resultClass, setResultClass] = useState("")

  /* You will need some function to handle the key pressed and button events */
  const handleChangeA = (event) => {
    setA(event.target.value)
  }

  const handleChangeB = (event) => {
    setB(event.target.value)
  }

  const computeResult = () => {
    if ((isNaN(a) || typeof a == "boolean") || (isNaN(b) || typeof b == "boolean")) {
      setResult("A and B shall be numbers!")
      setResultClass("error")
    }
    else if (a === "" || b === "") {
      setResult("A and B shall not be emptied!")
      setResultClass("error")
    }
    else {
      setResult(parseFloat(a) + parseFloat(b))
      setResultClass("")
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={handleChangeA} value={a}/>

      <label>B =</label>
      <input onChange={handleChangeB} value={b} />

      <label>A + B =</label>

      {/* When Compute button is clicked, this input displays the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result} className={resultClass}/>
      <button onClick={computeResult}>Compute</button>
    </main>
  );
}

export default App;
