import axios from "axios";
import Swal from "sweetalert2";

export const  registerUser = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"REGISTER_LOGIN_PENDING"})
        const result = await axios.post("http://localhost:4000/users/register/toko",data)
        const user = result.data.data
        dispact({type:"USER_REGISTER_SUCCESS",payload: user})
        Swal.fire("Success", "Register toko success", "success");
        navigate('/login')
        console.log("user register success")
    } catch(err){
        console.log("user register err")
        console.log(err)
        Swal.fire("Warning", "Register toko failed", "error");
    }
}