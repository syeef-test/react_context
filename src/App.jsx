import React, { createContext, useContext, useReducer } from "react";
import "./App.css";

// Step 1: Create a context
const CounterContext = createContext();

// Step 2: Create a reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Step 3: Create a provider component
const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 4: Create a consumer component (or use useContext hook)
const CounterDisplay = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <p>Count: {state.count}</p>
    </div>
  );
};

// Step 5: Create buttons to dispatch actions
const CounterButtons = () => {
  const { dispatch } = useContext(CounterContext);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

// Step 6: Use the provider to wrap your application
function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Counter App</h1>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
}

export default App;
