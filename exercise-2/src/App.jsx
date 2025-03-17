import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [value, setValue] = useState("")

  /* You will need a function to handle a key pressed on the first input and update the state*/
  const handleChange = (event) => {
    setValue(event.target.value)
    console.log(event.key)
  }
  
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input value={value} onChange={handleChange}/>

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input disabled value={value.toUpperCase()} />
      </p>
    </main>
  );
}

export default App;
