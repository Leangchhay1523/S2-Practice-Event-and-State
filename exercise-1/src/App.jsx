import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setRaining] = useState(false)

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setRaining(false)
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setRaining(true)
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return isRaining? "Rain Time!":"Sun Time!"
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    return isRaining? "rainy":"sunny"
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick} >Sunny Time</button>
      <button onClick={onRainClick} >Rain Time</button>
    </main>
  );
}

export default App;
