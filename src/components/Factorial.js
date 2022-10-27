import React, { useState } from "react";
import { checkFactorial } from "../helpers/checkFactorial";
const Factorial = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(undefined);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setResult(checkFactorial(value));
  };
  return (
    <div className="container">
      <h1>Factorial</h1>
      <input
        placeholder="enter number"
        value={value}
        type="number"
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>Submit</button>
      <ul>
        <p>{result}</p>
      </ul>
    </div>
  );
};

export default Factorial;
