

import axios from "axios";
import appConfig from "../../Utils/AppConfig";
import EmployeesModel from "../Models/EmployeesModel";
import UserModel from "../Models/UsersModel";
import UsersModel from "../Models/UsersModel";

class UsersServics{

    public async getAllUsers(): Promise <UserModel[]>{

        //Get all Users into response object:
        const response = await axios.get<UsersModel[]>(appConfig.usersUrl);

        // Extract the user from the response:
        const users = response.data;

        // Return users:
        return users;

        

    }

}

const usersService = new UsersServics();
export default usersService;