import axios from "axios";
import Swal from "sweetalert2";

export const  loginUserc = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"USER_CUSTOMER_LOGIN_PENDING"})
        const result = await axios.post("http://localhost:4000/users/login", data)
        const userc = result.data.data
        console.log(userc,"actionlogin")
        localStorage.setItem("token",userc.token)
        localStorage.setItem("id",userc.id)
        dispact({type:"USER_CUSTOMER_LOGIN_SUCCESS",payload: userc})
        Swal.fire("Success", "Login customer success", "success")
        navigate('/home')
        console.log("user customer login success")
    } catch(err){
        console.log("user customer login err")
        console.log(err)
        Swal.fire("Warning", "Login customer failed", "error");
    }
}