import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import DetailProduct from '../../pages/DetailProduct'

const Navbar = () => {  
  const logout = () => {
    localStorage.clear()
    window.location.reload(false)
  }
  const token = localStorage.getItem("token")

  const user = useSelector((state)=>state.user.user)

  useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <nav className='bg-secondary' style={{height:"50px", paddingBottom:"25px"}}>
        <Link to="/">Home</Link>

        <Link to="/myBag">My Bag</Link>

        <Link to="/Checkout">Checkout</Link>
        
        <Link to="/product">Product</Link>

        <Link to="/DetailProduct">Detail Product</Link>

        <Link to="/profile">Profile</Link>
        
        <Link to="/login">Login</Link>

        <div className="name">
            <h6>{user.email}</h6>
            <h6>{user.fullname}</h6>
        </div>
        {token && 
        <button className='btn btn-danger btn-small' onClick={()=>logout()}>logout</button>
        }
    </nav>
  )
}

export default Navbar