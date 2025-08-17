let Welcome = function () {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(135deg, #f0f4f8, #d9e4f5)",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    maxWidth: "600px",
    margin: "50px auto"
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#1a1a1a",
    marginBottom: "15px"
  };

  const subHeadingStyle = {
    color: "#007BFF",
    marginBottom: "10px"
  };

  const introStyle = {
    fontSize: "1.1rem",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "15px"
  };

  const firstProgramStyle = {
    backgroundColor: "#fff",
    padding: "10px 15px",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#007BFF",
    display: "inline-block",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const quoteStyle = {
    fontStyle: "italic",
    color: "#555",
    fontSize: "1rem"
  };

  
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>👋 Hello World</h1>
      <h2 style={subHeadingStyle}>🚀 Welcome to my React Journey</h2>
      
      <p style={introStyle}>
        Hi, I'm <b>Muhammad Umar</b>, a CSIT student at NED University.  
        I'm passionate about learning <b>Web Development</b> and currently exploring  
        <b> JavaScript</b>, <b>React</b>, and <b>Backend Development</b>.
      </p>

      <p style={firstProgramStyle}>
        🎉 This is my <u>first React program</u> and my <u>first component</u>!
      </p>

      <p style={quoteStyle}>
        “Every line of code brings me closer to my dream as a developer.” 💻✨
      </p>
    </div>
  );
};

export default Welcome;
