import axios from "axios";
const url = "http://localhost:5000/api";

export const UserRegister = async (user) => {
    const payload = user;
 try {
    const registerUser = await axios.post(`${url}/users`,payload); 
    return registerUser
 } catch (error) {
    console.log(error);
 }
}

export const UserLogin = async (user) => {
   const payload = user;
try {
   const loginUser = await axios.post(`${url}/users`,payload); 
   return loginUser
} catch (error) {
   console.log(error);
}
}

export const addPin = async (pin) => {
   const payload = pin;
try {
   const pin = await axios.post(`${url}/pins`,payload); 
   return pin
} catch (error) {
   console.log(error);
}
}

export const getAllPins = async () => {
   
try {
   const pins = await axios.get(`${url}/pins`); 
   return pins
} catch (error) {
   console.log(error);
}
}