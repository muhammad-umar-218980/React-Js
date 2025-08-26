import Header from "./components/Header";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");

  const onButtonClicked = (buttonName) => {
    if(buttonName === "C"){
      setVal("");
    }else if(buttonName === "="){
      let result = eval(val);
      setVal(result);
    }else{
      let newVal = val + buttonName;
      setVal(newVal);
    }
    console.log(buttonName);
  };
  return (
    <>
      <Header />
      <Display displayVal={val} />
      <ButtonsContainer onButtonClicked={onButtonClicked} />
    </>
  );
}

export default App;

