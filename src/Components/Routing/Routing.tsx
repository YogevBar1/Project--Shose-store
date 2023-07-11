import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../LayoutArea/Home/Home";
import Products from "../ProductsArea/Products/Products";
import SuccessStories from "../SuccessStoriesArea/SuccessStories/SuccessStories";
import AboutUs from "../AboutUsArea/AboutUs/AboutUs";
import Page404 from "../LayoutArea/Page404/Page404";
import EmployeeList from "../EmployeeListArea/EmployeeList/EmployeeList";
import Users from "../UsersArea/Users/Users";
import EmployeeDetails from "../EmployeeListArea/EmployeeDetails/EmployeeDetails";
import AddEmployee from "../EmployeesArea/AddEmployee/AddEmployee";
import EditEmployee from "../EmployeesArea/EditEmployee/EditEmployee";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>

                {/*Home Route: */}
                <Route path="/home" element={<Home />} />

                {/*Products Route: */}
                <Route path="/products" element={<Products />} />

                {/*SuccessStories Route: */}
                <Route path="/successStories" element={<SuccessStories />} />

                {/*About us Route: */}
                <Route path="/aboutUs" element={<AboutUs />} />

                {/*Employees Route: */}
                <Route path="/employees" element={<EmployeeList />} />

                {/*Employees Details: */}
                <Route path="/employees/details/:employeeId" element={<EmployeeDetails />} />


                {/*Add Employee */}
                <Route path="/employees/AddEmployee" element={<AddEmployee />} />

                {/*Edit Employee */}
                <Route path="/employees/edit/:employeeId" element={<EditEmployee />} />

                {/*Users Route: */}
                <Route path="/users" element={<Users />} />





                {/*Default Route: */}
                {/* <Route path="/" element={<About />} /> */}
                <Route path="/" element={<Navigate to="/home" />} />

                {/* Page not found */}
                <Route path="*" element={<Page404 />} />

            </Routes>

        </div>
    );
}

export default Routing;
