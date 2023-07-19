import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserSiteModel from "../../Models/UserSiteModel";
import authService from "../../Services/AuthService";
import notifyService from "../../Services/Notifyservice";
import "./Login.css";
import CredentialsModel from "../../Models/CredentialsModel";

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentialsModel: CredentialsModel) {
        try {
            await authService.login(credentialsModel);
            notifyService.success("You have logged in successfully.");
            navigate("/home")
        }
        catch (err: any) {
            notifyService.error(err);
        }

    }
    return (
        <div className="Login">
            <h2>Login</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Username:</label>
                <input type="text" {...register("username")} />


                <label>password:</label>
                <input type="password" {...register("password")} />

                <button>Login</button>

            </form>
        </div>
    );
}

export default Login;
