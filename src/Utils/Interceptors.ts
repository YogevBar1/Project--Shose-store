import axios from "axios";
import { authStore } from "../Redux/AuthState";

class Interceptors{

    //Create app interceptors:
    public create(): void{

        // Registering to request interceptor
        axios.interceptors.request.use(requestObject=>{

            // requestObject containing data send with any request data

            if(authStore.getState().token){
                requestObject.headers.Authorization = "Bearer " + authStore.getState().token;
            }

            return requestObject;
        });

    }
}

const interceptor = new Interceptors();

export default interceptor;