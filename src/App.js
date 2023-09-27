import { useReducer } from "react";
import "./App.css";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <div className="sayi">
        <h2>Counter: {count}</h2>
      </div>

      <div>
        <button className="btn" onClick={() => dispatch("inc")}>
          <ion-icon name="arrow-up-outline"></ion-icon>{" "}
        </button>
        <button
          className="btn"
          onClick={() => dispatch("dec")}
          disabled={count === 0}
        >
          <ion-icon name="arrow-down-outline"></ion-icon>
        </button>
        <button
          className="btn"
          onClick={() => dispatch("reset")}
          disabled={count === 0}
        >
          0
        </button>
      </div>
    </div>
  );
}

export default App;
