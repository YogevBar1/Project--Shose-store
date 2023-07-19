import { NavLink } from "react-router-dom";
import "./Links.css";


function Links(): JSX.Element {

    
    return (
        <div className="Links">
			Menu

            <NavLink to="/Home">Home</NavLink>


            <NavLink to="/products">Products</NavLink>


            <NavLink to="/successStories">Success Stories</NavLink>

            <NavLink to="/aboutUs">About Us</NavLink>


            <NavLink to="/employees">Employees</NavLink>


            <NavLink to="/shoePics">Shoe pictures</NavLink>

            <NavLink to="/ContactUs">Contact Us</NavLink>


            


            <NavLink to="/users">Users</NavLink>


            

        </div>
    );
}

export default Links;
