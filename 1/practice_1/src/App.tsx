import { useState } from "react";
import "./App.css";

const initialArray = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(initialArray);
  const [letter, setLetter] = useState("A");

  const removeFirstArray = () => {
    setArray(array.slice(1));
  };

  const removeSpecificLetter = () => {
    setArray(array.filter((item) => item !== letter));
  };

  return (
    <>
      <strong>{array.join(", ")}</strong>
      <br />
      <button onClick={removeFirstArray}>Remove the first element from the array</button>
      <br />
      <input onChange={(e) => setLetter(() => e.target.value)} type="text" value={letter} /> <button onClick={removeSpecificLetter}>Remove {letter}</button>
      <br />
      <input onChange={(e) => setLetter(() => e.target.value)} type="text" value={letter} />
      <button onClick={() => setArray([letter, ...array])}>add a new element to the start of the array</button>
      <br />
      <input onChange={(e) => setLetter(() => e.target.value)} type="text" value={letter} />
      <button onClick={() => setArray([...array, letter])}>add a new element to the end of the array</button>
      <br />
      <button onClick={() => setArray([])}>remove all elements</button>
      <br />
      <button onClick={() => setArray(initialArray)}>reset array</button>
    </>
  );
}

export default App;
