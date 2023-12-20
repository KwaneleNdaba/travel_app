import axios from "axios";
const url = "http://localhost:5000/api";

const register = async (user) => {
    const payload = user;
 try {
    const registerUser = await axios.post(`${url}/`,payload); 
    return registerUser
 } catch (error) {
    console.log(error);
 }
}