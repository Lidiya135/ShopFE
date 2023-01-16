import React from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./navv.module.css";
import Logo from "../../components/Logo";
import filter from "../../img/sort.png";
import cart from "../../img/cartt.png";


function Navv() {
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
            <div className={styles.menu}>
              <li className={styles.mybag}>
                <NavLink to="/mybag">
                  <img src={cart} alt="cart" />
                </NavLink>
              </li>
              <li className={styles.login}>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className={styles.signup}>
                <NavLink to="/register_customer">Signup</NavLink>
              </li>
            </div>

            {/* <div className={styles.menu_login}>
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
                      <img src={christian} className="d-inline-block align-text-center" alt="cris" />
                    </div>
                  </button>
                  <div className={styles.dropdown_content}>
                    <Link to="/profile">Profile {user.fullname}</Link>
                    <Link to="#" onClick={handleLogout}>
                      LogOut
                    </Link>
                  </div>
                </div> */}
              {/* </li> */}
            {/* </div> */}
          
        </ul>
      </div>
    </div>
  </nav>
);
};


export default Navv