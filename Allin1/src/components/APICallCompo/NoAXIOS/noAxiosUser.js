import React from "react";
// import "../NoAXIOS/noAxiosAPI.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserData = ({ users }) => {
    return (
        <React.Fragment>
                {users.map((cureentUsers, index) => {
                    const { id, name, username, email } = cureentUsers;
                    const { street, city, zipcode } = cureentUsers.address;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                        </tr>)
                })}
        </React.Fragment>
    )
};

export default UserData;
