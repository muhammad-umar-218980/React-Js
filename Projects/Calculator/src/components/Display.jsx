import "./Display.css";

const Display = ({ displayVal }) => {
  return (
    <div className="calculator-display my-3">
      <input type="text" className="form-control fs-3 text-end" readOnly value={displayVal} />
    </div>
  );
};

export default Display;
