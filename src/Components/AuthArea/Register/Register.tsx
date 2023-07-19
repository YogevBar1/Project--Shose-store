import { useForm } from "react-hook-form";
import UserSiteModel from "../../Models/UserSiteModel";
import "./Register.css";
import notifyService from "../../Services/Notifyservice";
import authService from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import UserModel from "../../Models/UsersModel";

function Register(): JSX.Element {

    const {register, handleSubmit} = useForm<UserSiteModel>();
    const navigate = useNavigate();

    async function send(user: UserSiteModel){
        try{
            await authService.register(user);
            notifyService.success("You have been successfully registered.");
            navigate("/home")
        }
        catch(err:any){
            notifyService.error(err);
        }

    }

    return (
        <div className="Register">
			<h2>Register</h2>

            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input type="text" {...register("firstName")}/>

                <label>Last Name:</label>
                <input type="text" {...register("lastName")}/>

                <label>Username:</label>
                <input type="text" {...register("username")}/>

                
                <label>password:</label>
                <input type="password" {...register("password")}/>

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
