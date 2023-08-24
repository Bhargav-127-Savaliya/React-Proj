import React, { createContext, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import INIT from "./components/utils/INIT";
import NavBar from "./handler/Router_nav";
// import APIHandler from "./handler/APIHandler";
// import HookHandler from "./handler/HookHandler";
// import Task1a2Handler from "./handler/tasks1-2_handler";

const data = createContext();

function App() {
  const name = "App.js";
  console.log(name);
  return (
    <React.Fragment>
      {/* <INIT/> */}
      {/* <Task1a2Handler /> */}
      {/* <data.Provider value={name}>
        <HookHandler />
      </data.Provider> */}
      {/* <APIHandler /> */}
      <NavBar />
    </React.Fragment>
  );
}

// custom hook 
const useGlobContex = () => {
  return useContext(data);
}
export default App;
export { data, useGlobContex };