import React, { useState } from 'react';
import { loginUserc } from '../../redux/actions/login_cus';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from '../login/login.module.css';
import Logo from '../../components/Logo';
import "@fontsource/metropolis";

export default function LoginCustomer() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const postData = (e) =>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    let data = {
      email,password
    }
    dispatch(loginUserc(data,navigate))
  }

  return (
    <div>
      <section className={styles.containerLogin}>
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
              <Link to="/login" >
              <button type="button" className={styles.btn_seller}>
                Seller
              </button>
              </Link>
            </div>
            <form onSubmit={postData} className="container mt-5 col-12 text-center">
                  <input type="email" className="form-control mb-2" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="email"/>
                  <input type="password" className="form-control mb-2"  value={password} name="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="password"/>
                  <p className={styles.forget}>
                  <Link to="/ResetPass">Forgot Password?</Link>
                  </p>
                  <button type='submit' className='btn btn-danger col-9'>Login</button>
            </form>
            <div className={styles.register}>
          <p>
            Don't have a Belanja account? <Link to="/register_customer">Register</Link>
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}
