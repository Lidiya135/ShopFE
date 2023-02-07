import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import product from '../../img/package.png';
import order from '../../img/order.png';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function SideBar() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const users= {
    headers: {
    Authorization: `Bearer ${token}`,
    "content-type": "multipart/form-data",
  },};

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
    <div className={styles.profile_sidebar}>
    <div className={styles.main_profile}>
      <div className={styles.profile_img}>
        <img src={data.photo} alt="" />
      </div>
      <div className={styles.name_profile}>
        <p> {data.fullname} </p>
        <label>
          <img src="" alt="" />
          Ubah Profile Image
          <input type="file" className={styles.input} />
        </label>
      </div>
    </div>

      <div className='p-1 m-3'>
        <div>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.orange}`}>
              <img src={product} alt="" />
            </div>
            <div className={styles.text}>
              <Link to="/Product"> <h5 style={{'color':'black'}}> Product </h5></Link>
            </div>
          </div>
        </div>

        <div className={styles.order_acount}>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.pink}`}>
              <img src={order} alt="" />
            </div>
            <div className={styles.text}>
              <Link to="/myOrder"> <h5 style={{'color':'black'}}> My Order</h5> </Link>
            </div>
          </div>
        </div>

        <div className={styles.order_acount}>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.pink}`}>
              {/* <img src={order} alt="" /> */}
            </div>
          <div className={styles.text}>
            <Link to="/myHistory"> <h5 style={{'color':'black'}}> History </h5> </Link>
          </div>
        </div>
          

        <div className={styles.order_acount}>
          <div className={styles.menu_profile}>
            <div className={`${styles.circle} ${styles.pink}`}>
              {/* <img src={order} alt="" /> */}
            </div>
          <div className={styles.text}>
            <Link to="/myBag"> <h5 style={{'color':'black'}}> Cart </h5> </Link>
          </div>
        </div>

        </div>
        <Button variant="danger" className={styles.log} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
</div>
  )
}
