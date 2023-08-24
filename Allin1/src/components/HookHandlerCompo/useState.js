import React, { useState } from "react";

function UseState() {
    const [status, setStatus] = useState("offline");
    const chstste = () => {
        if (status === "offline") {
            setStatus("online");
            // console.log("online");
        }else{
            setStatus("offline");
            // console.log("offline");
        }
    }
    return <React.Fragment>
        <h1>i am {status}</h1>
        <button onClick={chstste}>Change State</button>
    </React.Fragment>
}

export default UseState;