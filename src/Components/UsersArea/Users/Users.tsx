import { useEffect, useState } from "react";
import UsersModel from "../../Models/UsersModel";
import "./Users.css";
import usersService from "../../Services/UsersService";
import notifyService from "../../Services/Notifyservice";

function Users(): JSX.Element {

    const [frontendUsers,setFrontendUsers] = useState<UsersModel[]>([]);

    
    useEffect(()=>{
        // Get Users
        usersService.getAllUsers().
        then(backendUsers =>setFrontendUsers(backendUsers))
        .catch(err =>notifyService.error(err.message));

    })

    return (
        <div className="Users">
			Users:

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        frontendUsers.map(e =>
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.address.city}</td>
                   
                            </tr>
                            
                            )
                    }
                </tbody>

            </table>
        </div>
    );
}

export default Users;
