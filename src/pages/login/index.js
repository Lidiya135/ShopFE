import React, { useState } from 'react'
import { loginUser } from '../../redux/actions/login'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './login.module.css'
import Navbar from '../../components/Navbar'
import Logo from '../../components/Logo'
import "@fontsource/metropolis"

export default function Login() {
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
    dispatch(loginUser(data,navigate))
  }
  return (
    <div>
      <Navbar />
      <section className={styles.containerLogin}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.logo}>
                <Logo title="Belanja" link="/home" />
              </div>
            </div>
            <p>Please login with your account</p>
            <div className={styles.swictacount}>
              <button type="button" className={styles.btn_customer}>
                Customer
              </button>
              <button type="button" className={styles.btn_seller}>
                Seller
              </button>
            </div>
            <form onSubmit={postData} className="container mt-5 col-12 text-center">
                  <input type="email" className="form-control mb-2" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                  <input type="password" className="form-control mb-2" value={password} name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                  <p className={styles.forget}>
                  <Link to="/ResetPass">Forgot Password?</Link>
                  </p>
                  <button type='submit' className='btn btn-danger col-9'>Login</button>
            </form>
            <div className={styles.register}>
          <p>
            Don't have a Belanja account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}
