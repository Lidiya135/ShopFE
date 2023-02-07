import React, { useState, useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Logo from '../Logo';
import filter from '../../img/sort.png';
import cart from '../../img/cart.png';
import styles from '../Navv/navv.module.css';
// import christian from '../../img/christian.png';
import mail from '../../img/mail.png';
import notif from '../../img/notif.png';
// import user from '../../img/user.png';
import {NavLink,  Link} from 'react-router-dom';

const Nav1 = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate ();
  const users= {
    headers: {
    Authorization: `Bearer ${token}`,
  }};
// console.log("ini tokennyaaaa=", token);

// get Data 
  useEffect(() => {
    axios
    .get("https://zany-tan-rooster-hose.cyclic.app/users/profile", users)
    .then ((res) => {
      console.log("get data succes");
      console.log(res.data);
      res.data &&  setData(res.data.data[0]);
    })
    .catch((err) => {
      console.log("get data fail");
      console.log(err);
    });
  }, [])

  //Logout
  const handleLogout = async () =>{
    await localStorage.clear();
    Swal.fire("Logout", "Logout success", "success");
    navigate("/login")
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className={styles.logo}>
          <Logo className={styles.img_logo} />
          <NavLink to="/home">Belanja</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex">
          <input className={styles.search} type="search" placeholder="Search " aria-label="Search"  />
          <button className={styles.btn_sort} type="submit" >
            <img src={filter} alt="filter" />
          </button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto menu">
              <div className={styles.menu_login}>
                <li>
                  <NavLink className="nav-link active" aria-current="page" to="/mybag">
                    <img src={cart} alt="MyBag" />
                  </NavLink>
                </li>
                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={notif} className="d-inline-block align-text-center" alt="" />
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" aria-current="page" to="">
                    <img src={mail} className="d-inline-block align-text-center" alt="" />
                  </Link>
                </li>
                <li>
                  <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>
                      <div className={styles.profile}>
                        <img src={data.photo} className="d-inline-block align-text-center" alt="" />
                      </div>
                    </button>
                    <div className={styles.dropdown_content}>
                      <Link to="/profile">Profile {data.fullname}</Link>
                      <Link onClick={handleLogout} to="#" >
                        LogOut
                      </Link>
                    </div>
                  </div>
                </li>
              </div> 
             
          </ul>
        </div>
      </div>
    </nav>
  )}

export default Nav1