import CircularSpinner from "./components/CircularSpinner";

import "./App.css";

import DotSpinner from "./components/DotSpinner";

function App() {
  return (
    <div>
      <p>
        Circular Spinner
        <CircularSpinner color="" opacity="0.5" speed="2s" direction="360deg" />
      </p>
      <p>
        Dot Spinner
        <DotSpinner />
      </p>
    </div>
  );
}

export default App;

//colors={["#BDB8D1", "#98BADC", "#8699E0"]}
