// The React useCallback Hook returns a memoized callback function.

import React, { useCallback, useState } from "react";
import Todos from "./todo";


const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
    // [todos]
  }, []);

  return (
    <React.Fragment>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </React.Fragment>
  );
};

export default UseCallBack;