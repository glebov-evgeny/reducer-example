import React, { useReducer } from "react";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 25;

const reducer = (state, { type, payload = step }) => {
  switch (type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + payload)
      };
    case "DECREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - payload)
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + payload)
      };
    case "DECREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - payload)
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + payload)
      };
    case "DECREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - payload)
      };
    default:
      return state;
  }
};

export default function App() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 });

  return (
    <div className="app" style={{background: `rgb(${r}, ${g}, ${b})`}}>
      
      <div className="app__block">
        <h1 className="app__title">Background color:</h1>
        <div className="app__item">
          <span style={{background: '#ff0000'}}>red:</span>
          <button onClick={() => dispatch({ type: "INCREMENT_R" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
        </div>

        <div className="app__item">
          <span style={{background: '#27ff00'}}>green:</span>
          <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
        </div>

        <div className="app__item">
          <span style={{background: '#668eff'}}>blue:</span>
          <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
        </div>
        <p className="app__text">Current color: {`rgb(${r}, ${g}, ${b})`}</p>
      </div>
    </div>
  );
}

