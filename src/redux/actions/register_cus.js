import axios from "axios";
import Swal from "sweetalert2";

export const  registerUserc = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"REGISTER_CUSTOMER_LOGIN_PENDING"})
        const result = await axios.post("https://zany-tan-rooster-hose.cyclic.app/users/register/customer",data)
        const userc = result.data.data
        dispact({type:"USER_CUSTOMER_REGISTER_SUCCESS",payload: userc})
        Swal.fire("Success", "Register customer success", "success")
        navigate('/login_customer')
        console.log("user customer register success")
    } catch(err){
        console.log("user customer register err")
        console.log(err)
        Swal.fire("Warning", "Register customer failed", "error");
    }
}