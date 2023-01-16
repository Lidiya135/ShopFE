import React, { useState } from 'react';
import { registerUserc } from '../../redux/actions/register_cus';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from '../Register/Register.module.css';
import Logo from '../../components/Logo';
import "@fontsource/metropolis";

export default function RegisterCustomer() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [fullname,setFullname] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const postData = (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    console.log(fullname)
    let data = {
      email,password,fullname
    }
    dispatch(registerUserc(data,navigate))
  }

  return (
    <div>
      <section className={styles.containerRegister}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.logo}>
                <Logo title="Belanja" link="/home" />
              </div>
            </div>
            <p>Please login with your account</p>
            <div className={styles.swictacount}>
              <button type="button" style={{'backgroundColor': '#db3022'}} className={styles.btn_customer}>
                Customer
              </button>
              <Link to="/register" >
              <button type="button" className={styles.btn_seller}>
                Seller
              </button>
              </Link>
            </div>
            <form onSubmit={postData} className="container mt-5 col-12 text-center">
                  <input type="email" className="form-control mb-3" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="email"/>
                  <input type="password" className="form-control mb-3" value={password} name="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                  <input type="fullname" className="form-control mb-5" value={fullname} name="fullname" onChange={(e)=>setFullname(e.target.value)} placeholder="fullname"/>
                  <button type='submit' className='btn btn-danger col-9'>Register</button>
            </form>
            <div className={styles.register}>
          <p>
            Don't have a Belanja account? <Link to="/login_customer">Login</Link>
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}