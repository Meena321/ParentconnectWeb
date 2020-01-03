import React from "react";
import "./App.css";

// function App() {
//   return <h1>App.ps</h1>;
// }

const App = ({ history }) => (
  <div>
    <button
      onClick={() => {
        history.push("News");
      }}
    >
      Click Me
    </button>
  </div>
);

export default App;
