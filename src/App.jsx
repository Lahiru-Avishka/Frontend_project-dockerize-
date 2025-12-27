import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <h1>React Demo App</h1>
      <p>This is a simple React demo project.</p>

      <button onClick={() => alert("Button clicked!")}>
        Click Me
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif"
  }
};

export default App;
