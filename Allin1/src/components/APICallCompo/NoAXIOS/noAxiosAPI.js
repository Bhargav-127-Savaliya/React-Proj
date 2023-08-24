import React, { useEffect, useState } from "react";
import UserData from "./noAxiosUser";
import "../NoAXIOS/noAxiosAPI.css";

const API = "https://jsonplaceholder.typicode.com/users";

const NoAxiosAPI = () => {
    const [users, setUseres] = useState([]);

    const fetchUserAPI = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.length > 0) {
                setUseres(data);
            }
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserAPI(API);
    }, []);

    return (
        <React.Fragment>
                <h2>API Running Without AXIOS</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserData users={users} />
                    </tbody>
                </table>
        </React.Fragment>
    )
};

export default NoAxiosAPI;
