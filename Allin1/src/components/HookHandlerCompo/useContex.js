import React from "react";
import { useGlobContex } from "../../App";

const UseContex = (props) => {
  const name = useGlobContex();
  return (
    <React.Fragment>
        <div>
            <h1>App Data Works, imported from {name}</h1>
        </div>
    </React.Fragment>
  )
};

export default UseContex;
