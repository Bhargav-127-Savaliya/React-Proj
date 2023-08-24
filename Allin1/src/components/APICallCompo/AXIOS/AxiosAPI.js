import axios from "axios";
import React, { useEffect, useState } from "react";
import "../AXIOS/AxiosAPI.css";

const AxiosAPI = () => {
    const [myData , setMyData] = useState([]);
    const [isError , setIsError] = useState("");
    const [loding, setLoding] = useState(true);
    

    // useEffect(()=>{
    //     axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>setMyData(res.data))
    //     .catch((error)=>setIsError(error.message));
    // },[]);

    const getpostdata = async () => {
        // for (let index = 0; index < 100000000; index++) {}
        setLoding(false)
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            // const res = await axios.get("https://mocki.io/v1/c4226301-3c28-45a2-906c-3a87bcda1d66");
            setMyData(res.data);
            console.log(res);
        } catch (error) {
            setIsError(error.message);
            // console.log(error);
        }
    }
    useEffect(()=>{
        getpostdata();
    },[]);
    
  return (
    <React.Fragment>
        <div>
        <h2>API Running with AXIOS</h2>
            {isError !== "" && <h2>{isError}</h2>}
            <div className="container">
                {!loding && myData.slice(0,9).map((post)=>{
                    const {title,id,body} = post;
                    return (
                        <div key={id} className="element">
                            <h2>{title.slice(0,9).toUpperCase()}</h2>
                            <p>{body.slice(0,100)}</p>
                        </div>
                    )
                })}
                {loding && <p>LODING...</p>}
            </div>
        </div>
    </React.Fragment>
  )
};

export default AxiosAPI;
