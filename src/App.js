import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotion is {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion("Happy")}>Make Happy</button>
      <button onClick={() => setSecondary("Crabby")}>Make crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>enthusiastic</button>
    </>
  );
}

export default App;
