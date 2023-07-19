class AppConfig{
    public readonly employeesUrl = "http://localhost:3030/api/employees/"; //Ending /

    public readonly usersUrl = "https://jsonplaceholder.typicode.com/users/";

    public readonly registerUrl ="http://localhost:3030/api/auth/register/";

    public readonly loginUrl = "http://localhost:3030/api/auth/login/";


    public readonly contactUsUrl = "http://localhost:3030/api/contact-us/";
}



//Singleton - one and only object that serv all the app, and you cant make another object fro outside
const appConfig = new AppConfig();

export default appConfig;