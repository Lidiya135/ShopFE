import React, {useEffect, useState} from 'react';
// import { Link, useParams } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from './myproduct.module.css';
import Nav1 from '../../components/Nav1';
import SideBar from '../../components/Sidebar';
import EditProductModal from '../../components/EditProductModal';
import axios from 'axios';
// import { Link } from 'react-router-dom';

function MyHistory() {

  const [data, setData] = useState([]);
    const token = localStorage.getItem("token");
    const user= {
      headers: {
      Authorization: `Bearer ${token}`,
    }};
    console.log("my token=", token);

//get portofolio
    const getData =() =>{
      axios
        .get(`http://localhost:4000/products`, user)
        .then ((res) => {
          console.log("get data products succes");
          console.log(res.data, "data dari products");
          res.data &&  setData(res.data.data.result);
        })
        .catch((err) => {
          console.log("get products fail");
          console.log(err);
        });
    }
    useEffect(() => {
        getData()
      }, [])

  return (
    <div className={styles.myOrderPg}>
      <Nav1 />
        <div className={styles.conten}>
          <div className={styles.sidebar}>
            <SideBar />
          </div>
          <div className={styles.maincontent}>
            <div className={styles.ordertable}>
            <div className={styles.tittl}>
              <h3 >MY History </h3>
              
            </div>
              <hr />
              <InputGroup className="m-3 w-50">
                <Form.Control
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  search
                </Button>
              </InputGroup>
              <div className={styles.overflow}>
                <div className={styles.card}>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td> Product_Name </td>
                      <td> Category </td>
                      <td> Price </td>
                      <td> stock </td>
                      <td> Action </td>
                    </tr>
                {data?(
                    data.map((item)=>(
                  <tr>
                      <td>{item.name}</td>
                      <td>cat</td>
                      <td>Rp.{item.price}</td>
                      {/* <td>{item.stock}</td> */}
                      <td className='d-flex gap-2'> 
                      <EditProductModal />
                      <Button variant="danger" style={{'height':'38px'}}>Archive</Button>{' '}
                      </td>
                    </tr>
                    ))
                  ):<span> ..Loading</span>}
                  </tbody>
                 </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MyHistory;