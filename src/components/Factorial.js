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
  console.log("result", typeof result);
  return (
    <div className="container">
      <h1>Factorial</h1>
      <input
        placeholder="enter number"
        value={value}
        type="number"
        required
        pattern="[0-9]*"
        onChange={changeHandler}
      />
      <button onClick={submitHandler}>Submit</button>

      {typeof result === "string" ? (
        <p style={{ color: "red" }}>{result}</p>
      ) : (
        <p style={{ color: "black" }}>{result}</p>
      )}
    </div>
  );
};

export default Factorial;
