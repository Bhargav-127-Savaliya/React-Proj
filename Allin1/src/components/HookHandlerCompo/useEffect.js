import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const currentScreenWidth = () => {
      setWidthCount(() => window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", currentScreenWidth);
      return () => {
        window.removeEventListener("resize", currentScreenWidth);
      };
    });

    return (
        <React.Fragment>
            <div>
                <h2>
                    The size of the window is <span> {widthCount} </span>
                </h2>
            </div>
        </React.Fragment>
    )
};

export default UseEffect;
