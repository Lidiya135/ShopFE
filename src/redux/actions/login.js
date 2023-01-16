import axios from "axios";
import Swal from "sweetalert2";

export const  loginUser = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"USER_LOGIN_PENDING"})
        const result = await axios.post("http://localhost:4000/users/login",data)
        const user = result.data.data
        localStorage.setItem("token",user.token)
        localStorage.setItem("id",user.id)
        dispact({type:"USER_LOGIN_SUCCESS",payload: user})
        Swal.fire("Success", "Login toko success", "success")
        navigate('/product')
        console.log("user login success")
    } catch(err){
        console.log("user login err")
        console.log(err)
        Swal.fire("Warning", "Login toko failed", "error");
    }
}