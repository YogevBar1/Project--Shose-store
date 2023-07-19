
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EmployeesModel from "../../Models/EmployeesModel";
import "./EditEmployee.css";
import employeesListService from "../../Services/EmployeesListService";
import { useForm } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import notifyService from "../../Services/Notifyservice";

function EditEmployee(): JSX.Element {
    const { register, handleSubmit, setValue } = useForm<EmployeesModel>();

    const [frontendEmployee, setFrontedEmployee] = useState<EmployeesModel>();

    const navigate = useNavigate();

    const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

    const params = useParams();

    const id = +params.employeeId;

    const location = useLocation();
    const currentUrl = location.pathname;

    useEffect(() => {
        employeesListService
            .getOneEmployee(id)
            .then((backendEmployee) => {
                setFrontedEmployee(backendEmployee);
                const defaultImage = `http://localhost:3030/api/employees/images/${backendEmployee?.imageName}`;
                setImagePreview(defaultImage);

                // Set form values
                setValue("firstName", backendEmployee?.firstName);
                setValue("lastName", backendEmployee?.lastName);
                setValue("title", backendEmployee?.title);
                setValue("country", backendEmployee?.country);
                setValue("city", backendEmployee?.city);
                setValue("birthDate", backendEmployee?.birthDate);
            })
            .catch((err) => notifyService.error(err.message));
    }, [id, setValue]);

    async function send(employee: EmployeesModel) {
        try {
            // Convert fileList (containing single file) into a File Type:
            employee.image = (employee.image as unknown as FileList)[0];

            // Include the id and imageName from the frontendEmployee object
            employee.id = frontendEmployee?.id;
            employee.imageName = frontendEmployee?.imageName;

            await employeesListService.editEmployee(employee, currentUrl);

            notifyService.success("The employee edited successfully");
            navigate("/employees");
        } catch (err: any) {
            notifyService.error(err.message);
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
        <div className="EditEmployee">
            <form onSubmit={handleSubmit(send)}>
                <label>First Name:</label>
                <input
                    type="text"
                    {...register("firstName")}
                    required
                    minLength={2}
                    maxLength={30}
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    {...register("lastName")}
                    required
                    minLength={2}
                    maxLength={30}
                />

                <label>Title:</label>
                <input
                    type="text"
                    {...register("title")}
                    required
                    minLength={5}
                    maxLength={30}
                />

                <label>Country:</label>
                <input
                    type="text"
                    {...register("country")}
                    required
                    minLength={3}
                    maxLength={30}
                />

                <label>City:</label>
                <input
                    type="text"
                    {...register("city")}
                    required
                    minLength={2}
                    maxLength={30}
                />

                <label>Birth Date:</label>
                <input type="date" {...register("birthDate")} required />

                <label>Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    {...register("image")}
                    onChange={handleImagePreview}
                />

                <img src={imagePreview} alt="Preview" />

                <button type="submit">Edit</button>
            </form>
        </div>
    );
}

export default EditEmployee;
