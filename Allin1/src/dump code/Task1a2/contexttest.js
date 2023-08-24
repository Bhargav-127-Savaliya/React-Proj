import React, { createContext } from "react";
import Tas from "./mod";


const data1 = createContext();
const data2 = createContext();

function CreateContexttest() {
    const name = "Bhargav";
    const server = "127.0.0.1";

    return <React.Fragment>
        <data1.Provider value={name}>
            <data2.Provider value={server}>
                <Tas></Tas>
            </data2.Provider>
        </data1.Provider>
    </React.Fragment>
}

export default CreateContexttest;
export {data1,data2}