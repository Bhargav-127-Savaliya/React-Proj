import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Toggler from "../components/Task1a2Compo/toggle";


function Task1a2Handler() {

    return (
      <React.Fragment>
        <Alert variant="warning" className="text-center my-4 mx-4">Admin Panel</Alert>
        <Toggler />
      </React.Fragment>
    );
  }
  
  export default Task1a2Handler;