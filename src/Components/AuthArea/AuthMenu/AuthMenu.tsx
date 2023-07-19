import { useEffect, useState } from "react";
import { authStore } from "../../../Redux/AuthState";
import UserSiteModel from "../../Models/UserSiteModel";
import "./AuthMenu.css";
import { NavLink } from "react-router-dom";
import authService from "../../Services/AuthService";
import notifyService from "../../Services/Notifyservice";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserSiteModel>();

    useEffect(() => {
        setUser(authStore.getState().user);
        const unsubscribe = authStore.subscribe(() =>  setUser(authStore.getState().user));
        return unsubscribe;
    }, []);

    function logoutMe(): void {
        authService.logout();
        notifyService.success("Bye Bye...");
    }

    return (
        <div className="AuthMenu">

            {!user &&
                <div>
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>
                    <span> | </span>
                    <NavLink to="/register">Register</NavLink>
                </div>
            }

            {user &&
                <div>
                    <span>Hello {user.firstName} {user.lastName} | </span>
                    <NavLink to="/home" onClick={logoutMe}>Logout</NavLink>
                </div>
            }

        </div>
    );
}

export default AuthMenu;
