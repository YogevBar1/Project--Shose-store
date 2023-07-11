import { createStore } from "redux";
import EmployeesModel from "../Components/Models/EmployeesModel";

//1.Global State:
export class EmployeesState {

    public employees: EmployeesModel[] = []; //Init with empty array.
}

//2.Action Type
export enum EmployeesActionType {
    setEmployees = "setEmployees",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee6"

}

//3. Action:
export interface EmployeesAction {
    type: EmployeesActionType;  //Action Type
    payload: any //The data related to that action
}

//4. Reducer (invoked by redux library)
export function employeesReducer(currentState = new EmployeesState(), action: EmployeesAction): EmployeesState {

    const newState = { ...currentState }; //Duplicate the global state

    // Change the duplicated global state according the action:
    switch (action.type) {
        case EmployeesActionType.setEmployees:  //Here the payload is products array
            newState.employees = action.payload;    //Save all employees into global state
            break;

        case EmployeesActionType.AddEmployee: //Here the payload is the single product to add:
            newState.employees.push(action.payload); //Add that product into global state.
            break;


        case EmployeesActionType.UpdateEmployee: //Here the payload is a single product to update.
            const indexToUpdate = newState.employees.findIndex(e => e.id === action.payload.id);
            if (indexToUpdate >= 0) newState.employees[indexToUpdate] = action.payload;
            break;

        case EmployeesActionType.DeleteEmployee: //Here the payload is id to delete.
            const indexToDelete = newState.employees.findIndex(e => e.id === action.payload);
            if (indexToDelete >= 0) newState.employees.splice(indexToDelete, 1);
            break;



    }


    return newState;    //Return the changed duplicated global state

}

//5. Store:
export const employeesStore = createStore(employeesReducer);