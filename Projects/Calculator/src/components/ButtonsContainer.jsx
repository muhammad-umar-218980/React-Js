import "./ButtonsContainer.css";

const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
    'C', '(', ')', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const getButtonClass = (buttonName) => {
    if (['C', '(', ')', '/'].includes(buttonName)) {
      return 'btn-info';
    }
        if ([ '*', '-', '+'].includes(buttonName)) {
      return 'btn-warning';
    }
    if (buttonName === 'C') {
      return 'btn-danger';
    }
    return 'btn-light';
  };

  return (
    <div className="calculator-buttons">
      <div className="d-grid gap-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {buttonNames.map((buttonName) => (
          <button key={buttonName} className={`btn ${getButtonClass(buttonName)} fs-4 ${buttonName === '=' ? 'equal-btn' : ''}`} onClick={() => onButtonClicked(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;
