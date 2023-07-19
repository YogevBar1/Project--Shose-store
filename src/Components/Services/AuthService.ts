import axios from "axios";
import UserSiteModel from "../Models/UserSiteModel";
import UserModel from "../Models/UsersModel";
import appConfig from "../../Utils/AppConfig";
import { AuthAction, AuthActionType, authStore } from "../../Redux/AuthState";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService {

    // Register new user
    public async register(user: UserSiteModel): Promise<void> {
        // Send new user to the backend
        const response = await axios.post<string>(appConfig.registerUrl, user);

        // Extract the token:
        const token = response.data;

        // Send token to global state
        const action: AuthAction = { type: AuthActionType.Register, payload: token };
        authStore.dispatch(action);

    }

    // Login existing user:
    public async login(credentials: CredentialsModel): Promise<void> {
        // send credentials to backend:
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        // Extract the token:
        const token = response.data;

        // Send token to global state
        const action: AuthAction = { type: AuthActionType.Login, payload: token };
        authStore.dispatch(action);

    }

    // Logout:
    public logout(): void{
        // Call log out in global state
        const action: AuthAction = { type: AuthActionType.Logout };
        authStore.dispatch(action);
    }
}

const authService = new AuthService();

export default authService;