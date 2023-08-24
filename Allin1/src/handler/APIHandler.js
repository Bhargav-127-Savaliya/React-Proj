import React from "react";
import NoAxiosAPI from "../components/APICallCompo/NoAXIOS/noAxiosAPI";
import AxiosAPI from "../components/APICallCompo/AXIOS/AxiosAPI";

const APIHandler = () => {
  return (
    <React.Fragment>
        <div className="text-center">
            <h2>API Running</h2>
            <NoAxiosAPI />
            <AxiosAPI />
        </div>
    </React.Fragment>
  )
};

export default APIHandler;
