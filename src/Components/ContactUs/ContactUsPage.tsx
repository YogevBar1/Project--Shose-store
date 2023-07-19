
import { useForm } from "react-hook-form";
import ContactUsModel from "../Models/ContactUsModel";
import ContactUsService from "../Services/ContactUsService";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import { Clear, ContactMail, Send } from "@mui/icons-material";
import notifyService from "../Services/Notifyservice";

function ContactUsPage(): JSX.Element {
  const { register, handleSubmit } = useForm<ContactUsModel>();
  const navigate = useNavigate();

  async function send(contactUs: ContactUsModel) {
    try {
      await ContactUsService.sendMassage(contactUs);
      notifyService.success("The Message sent successfully");
      navigate("/home");
    } catch (err: any) {
      notifyService.error(err);
    }
  }

  return (
    <div className="ContactUs">
      <Typography variant="h3">
        Contact Us
        <ContactMail fontSize="large" />
      </Typography>

      <form onSubmit={handleSubmit(send)}>
        <TextField label="Full Name" {...register("name")} type="text" className="TextBox" />
        <TextField label="Phone number" {...register("phone")} type="string" className="TextBox" />
        <TextField label="Email" {...register("email")} type="email" className="TextBox" />
        <TextField label="Message" {...register("message")} type="text" className="TextBox" />

        <ButtonGroup variant="contained" fullWidth>
          <Button color="primary" type="submit">
            Send &nbsp; <Send />
          </Button>
          <Button color="secondary" type="reset">
            Clear &nbsp; <Clear />
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default ContactUsPage;