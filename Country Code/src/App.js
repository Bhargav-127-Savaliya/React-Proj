import { BrowserRouter } from "react-router-dom";
import HomePage from "./component/Home";
import Country from "./component/Country";
import React from "react";
import { Route , Routes } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/country/:fname" element={<Country/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
