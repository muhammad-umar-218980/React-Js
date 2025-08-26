const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
    'C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'
  ];

  const handleButtonClick = (buttonName,event) => {
    onButtonClicked(buttonName);
    console.log(event);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-grid gap-2" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {buttonNames.map((buttonName) => (
              <button key={buttonName} className="btn btn-light border fs-4" onClick={(event) => handleButtonClick(buttonName,event)}>
                {buttonName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsContainer;
