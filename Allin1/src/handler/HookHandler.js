import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseCallBack from "../components/HookHandlerCompo/useCallBack";
import UseMemo from "../components/HookHandlerCompo/useMemo";
import UseRef from "../components/HookHandlerCompo/useRef";
import UseReducer from "../components/HookHandlerCompo/useReducer";
import UseContex from "../components/HookHandlerCompo/useContex";
import UseEffect from "../components/HookHandlerCompo/useEffect";
import UseState from "../components/HookHandlerCompo/useState";

function HookHandler() {

    return (
        <React.Fragment>
            <div className="text-center">
                <h1>Hook Works!</h1>
                <UseState />
                <UseEffect/>
                <UseContex />
                <UseReducer />
                <UseRef />
                <UseMemo />
                <UseCallBack />
            </div>
        </React.Fragment>
    );
}

export default HookHandler;