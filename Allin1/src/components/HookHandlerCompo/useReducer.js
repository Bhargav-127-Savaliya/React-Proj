import React from "react";
import reducer from "./reducer";
import { useReducer } from "react";

const initialValue = 0;

const UseReducer = () => {
//   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <React.Fragment>
        <div>
        <div className="container">
          <button onClick={() => dispatch({ type: "INC" })}>+</button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>-</button>
        </div>
        </div>
    </React.Fragment>
  )
};

export default UseReducer;
