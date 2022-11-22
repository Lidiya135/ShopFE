import React from 'react'
import logo from '../../img/belanjavector.png'
import filter from '../../img/sort.png'
import cart from '../../img/cart.png'
import styles from './Nav1.module.css'
import home from '../../pages/Home'
import {Link} from 'react-router-dom'

const Nav1 = () => {
  return (
    <div className={styles.container}>
        <div className="container-fluid shadow-lg">
          <div className="container d-flex">
            <div className="row w-100 py-4">
           
              <div className="col-2 d-flex">
                <img src={logo} className={styles.logo} alt='logo'/>
                <a className={"fw-bold text-decoration-none mt-1 ms-2 "+ styles.textlogo} href={home}>Blanja</a>
              </div>
              <div className={"col-6 position-relative d-flex align-items-center "+ styles.wrapperinput}>
                <input type="text" className={"form-control rounded-pill " + styles.input_search}  name="Search" placeholder="Search"/>
                <button className="btn btn-none position-absolute end-0 me-4"><i className="bi bi-search" /></button>
              </div>
              <div className="col-4 d-flex align-items-center">
                <div className={"btn btn-none "+ styles.btnfilter}><i class="bi bi-funnel"/>
                  <img src={filter} className={styles.filter} alt='filter'/>
                </div>
                <div className="wrapperbtn ms-auto mb-2">
                  <button className="btn btn-none"><i className={"bi bi-cart2 "+ styles.cart} />
                    <img src={cart} className={styles.cart} alt='cart'/>
                  </button>
                  <button className={"btn btn-danger rounded-pill mx-4 "+ styles.btnauth}>
                  <Link to="/login">Login</Link>
                  </button>
                  <button className={"btn btn-outline-secondary "+ styles.btnauth}>
                  <Link to="/register">Register</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav1