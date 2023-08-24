import React, { useRef } from "react";

const UseRef = () => {
    const inputRef = useRef();

    const changeBorder = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#82E0AA";
    };

    return (
        <React.Fragment>
            <div>
                <input type="text" ref={inputRef} />
                <br />
                <button onClick={changeBorder}>submit</button>
            </div>
        </React.Fragment>
    )
};

export default UseRef;
