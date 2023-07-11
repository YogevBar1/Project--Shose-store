import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";
import EmployeesModel from "../../Models/EmployeesModel";
import employeesListService from "../../Services/EmployeesListService";
import { useForm } from "react-hook-form";
import { useState } from "react";

function AddEmployee(): JSX.Element {

    const { register, handleSubmit } = useForm<EmployeesModel>();

    const navigate = useNavigate();

    const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

    async function send(employee: EmployeesModel) {
        try {
            // Convert fileList (containing single file) into a File Type:
            employee.image = (employee.image as unknown as FileList)[0];
            await employeesListService.addEmployee(employee);
            alert("The employee added successfully");
            navigate("/employees");

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    // Handle image preview
    const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };


    return (
        <div className="AddEmployee">
            <h2>Add Employee:</h2>
            <form onSubmit={handleSubmit(send)}>

                <label>First Name:</label>
                <input type="text" {...register("firstName")} required minLength={2} maxLength={30} />

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} required minLength={2} maxLength={30} />

                <label>Title:</label>
                <input type="text" {...register("title")} required minLength={5} maxLength={30} />

                <label>Country:</label>
                <input type="text" {...register("country")} required minLength={3} maxLength={30} />

                <label>City:</label>
                <input type="text" {...register("city")} required minLength={2} maxLength={30} />

                <label>Birth Date:</label>
                <input type="Date" {...register("birthDate")} required />

                <label >Image: </label>
                <input type="file" accept="image/*" multiple {...register("image")} onChange={handleImagePreview} />

                { <img src={imagePreview} alt="Image Preview" className="image-preview" />}


                <button>Add</button>

            </form>


        </div>
    );
}

export default AddEmployee;
