import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.css";
import { useEffect, useState } from "react";
import EmployeesModel from "../../Models/EmployeesModel";
import employeesListService from "../../Services/EmployeesListService";
import notifyService from "../../Services/Notifyservice";

function EmployeeDetails(): JSX.Element {

    const params = useParams();
    const id = + params.employeeId;
    const navigate = useNavigate();

    const [frontendEmployee, setFrontedEmployee] = useState<EmployeesModel>();

    useEffect(() => {
        employeesListService.getOneEmployee(id)
            .then(backendEmployee => setFrontedEmployee(backendEmployee))
            .catch(err => notifyService.error(err.message));

    }, []);

    async function deleteMe(): Promise<void> {
        try {
            const ok = window.confirm("Are you sure you want to delete the item?");
            if (!ok) return;
            await employeesListService.deleteEmployee(id);
            notifyService.success("Employee deleted successfully");
            navigate("/employees");

        }
        catch (err: any) {
            notifyService.error(err.message);
        }

    }
    console.log("ID= " + frontendEmployee?.id);
    return (
        <div className="EmployeeDetails">
            <h2>Employee Details</h2>
            <h3>First Name: {frontendEmployee?.firstName}</h3>
            <h3>Last Name: {frontendEmployee?.lastName}</h3>
            <h3>Title: {frontendEmployee?.title}</h3>
            <h3>Country: {frontendEmployee?.country}</h3>
            <h3>City: {frontendEmployee?.city}</h3>
            <h3>Birth Date: {frontendEmployee?.birthDate}</h3>
            <h3>Image:</h3>
            <img src={"http://localhost:3030/api/employees/images/" + frontendEmployee?.imageName}></img>
            <br /><br />
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>

            <br /><br />

            <NavLink to={`/employees/edit/${frontendEmployee?.id}`}>  Edit  </NavLink>
        </div>
    );
}

export default EmployeeDetails;
