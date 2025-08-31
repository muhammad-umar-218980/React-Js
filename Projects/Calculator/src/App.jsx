import Header from "./components/Header";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import "./Calculator.css";

function App() {
  const [val, setVal] = useState("");

  const onButtonClicked = (buttonName) => {
    if (buttonName === "C") {
      setVal("");
    } else if (buttonName === "=") {
      try {
        const result = eval(val.replace(/\(/g, "*").replace(/\)/g, ""));
        setVal(String(result));
      } catch (error) {
        setVal("Error");
      }
    } else {
      let newVal = val + buttonName;
      setVal(newVal);
    }
  };
  return (
    <div className="calculator">
      <Header />
      <Display displayVal={val} />
      <ButtonsContainer onButtonClicked={onButtonClicked} />
    </div>
  );
}

export default App;

