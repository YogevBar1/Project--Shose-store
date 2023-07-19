import axios from "axios";
import appConfig from "../../Utils/AppConfig";
import ContactUsModel from "../Models/ContactUsModel";

class ContactUsService {
    
    public async sendMassage(contactUs: ContactUsModel): Promise<void> {


        await axios.post<ContactUsModel>(appConfig.contactUsUrl, contactUs);

    }


}
const contactUsService = new ContactUsService();

export default contactUsService;


