import axios from "axios";
const url = "http://localhost:5000/api";

export const Register = async (user) => {
    const payload = user;
 try {
    const registerUser = await axios.post(`${url}/users`,payload); 
    return registerUser
 } catch (error) {
    console.log(error);
 }
}