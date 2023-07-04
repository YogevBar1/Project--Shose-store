import { useEffect, useState } from "react";
import "./EmployeeList.css";
import EmployeesModel from "../../Models/EmployeesModel";
import employeesListService from "../../Services/EmployeesListService";





function EmployeeList(): JSX.Element {

    const [frontendEmployees, setFrontedList] = useState<EmployeesModel[]>([]);




    useEffect(() => {

        // Get Employees
        employeesListService.getAllEmployees()
            .then(backendEmployees => setFrontedList(backendEmployees))
            .catch(err => alert(err.message));


    }, []);

    return (
        <div className="EmployeeList">


            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Birth Date</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        frontendEmployees.map(e =>
                            <tr key={e.id}>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.title}</td>
                                <td>{e.country}</td>
                                <td>{e.city}</td>
                                <td>{e.birthDate}</td>
                                <td>
                                    <img src={"http://localhost:3030/api/employees/images/"+e.imageName}></img>

                                </td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

        </div>
    );
}

export default EmployeeList;
