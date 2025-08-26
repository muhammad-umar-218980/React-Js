import Header from "./components/Header";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {

  let displayVal = 9;

  const onButtonClicked = (buttonName) => {
    console.log(buttonName);
  };
  return (
    <>
      <Header />
      <Display displayVal={displayVal} />
      <ButtonsContainer onButtonClicked={onButtonClicked} />
    </>
  );
}

export default App;

