import axios from "axios";
import EmployeesModel from "../Models/EmployeesModel";
import appConfig from "../../Utils/AppConfig";
import { EmployeesAction, EmployeesActionType, employeesStore } from "../../Redux/EmployeesState";

class EmployeesListService {

    // Get all products from the beckend:
    public async getAllEmployees(): Promise<EmployeesModel[]> {

        // Get products from global state:
        let employees = employeesStore.getState().employees;

        // If there are no employees in global state
        if (employees.length === 0) {

            // Get all employees into response object:
            const response = await axios.get<EmployeesModel[]>(appConfig.employeesUrl);


            // Extract the products from the response:
            employees = response.data;

            // Save Employees in global state:
            const action: EmployeesAction = { type: EmployeesActionType.setEmployees, payload: employees };
            employeesStore.dispatch(action);
        }

        // Return products
        return employees;
    }


    // Get on Employee:
    public async getOneEmployee(id: number): Promise<EmployeesModel> {

        // Get employees from global state:
        let employees = employeesStore.getState().employees;

        // Find desired employee:
        let employee = employees.find(p => p.id === id);

        // If product not found:
        if (!employee) {


            // Get one Employee:
            const response = await axios.get<EmployeesModel>(appConfig.employeesUrl + id);

            // Extract the employee from the response:
            employee = response.data;

        }

        // return employee
        return employee;
    }

    // add employee
    public async addEmployee(employee: EmployeesModel): Promise<void> {

        // Header is a Additional data sent in the request fir the configuration
        const options = {
            headers: { "Content-Type": "multipart/form-data" } //Include files in the request 
        }

        // Send Employee to the backend:
        const response = await axios.post<EmployeesModel>(appConfig.employeesUrl, employee, options);

        // Extract the added Employee send back from the backend:
        const addedEmployee = response.data;

        // Add added employee to global state:
        const action: EmployeesAction = { type: EmployeesActionType.AddEmployee, payload: addedEmployee };
        employeesStore.dispatch(action);

        console.log(addedEmployee);
    }

    // Delete Employee from backend
    public async deleteEmployee(id: number): Promise<void> {
        // Delete the employee in the backend
        await axios.delete(appConfig.employeesUrl + id);

        // delete employee from global state:
        const action: EmployeesAction = { type: EmployeesActionType.DeleteEmployee, payload: id };
        employeesStore.dispatch(action);

    }



    // edit employee
    public async editEmployee(employee: EmployeesModel, currentUrl: string): Promise<void> {

        // Header is a Additional data sent in the request fir the configuration
        const options = {
            headers: { "Content-Type": "multipart/form-data" } //Include files in the request 
        }

        // Send employee to the backend
        const response = await axios.put<EmployeesModel>(appConfig.employeesUrl + employee.id, employee, options);

        const updatedEmployee = response.data;



        // Update employee to global state:
        const action: EmployeesAction = { type: EmployeesActionType.UpdateEmployee, payload: updatedEmployee };
        employeesStore.dispatch(action);

    }




}

const employeesListService = new EmployeesListService(); //SingleTon

export default employeesListService;
