import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Task1 from "./task1";
import Task2 from "./task2";
import { useState } from 'react';


function Toggler() {
    const [btnvariant, setbtnvariant] = useState('success');
    const [btnstatus, setbtnstatus] = useState('Go Online');
    const [show, setshow] = useState(false);

    const servstate = () => {
        if (btnvariant === 'danger') {
            setbtnstatus('Go online')
            setbtnvariant('success')
            setshow(false);
        }
        else {
            setbtnstatus('Go offline')
            setbtnvariant('danger')
            setshow(true);
        }
    }

    return <React.Fragment>
        <div className="text-center">
            <Button onClick={servstate} variant={btnvariant}>{btnstatus}</Button>
            {show && <div>
                <Task1 />
                <Task2 />
            </div>}
        </div>
    </React.Fragment>
}

export default Toggler;