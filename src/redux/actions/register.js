import axios from "axios";

export const  registerUser = (data,navigate) => async (dispact) =>{
    try{
        dispact({type:"REGISTER_LOGIN_PENDING"})
        const result = await axios.post("http://localhost:4000/register/login",data)
        const user = result.data.data
        dispact({type:"USER_REGISTER_SUCCESS",payload: user})
        navigate('/login')
        console.log("user register success")
    } catch(err){
        console.log("user register err")
        console.log(err)
    }
}