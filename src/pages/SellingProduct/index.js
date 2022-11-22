import React from 'react'
// import axios from 'axios'
// import styles from'./SellingProduct.module.css'
// import DatePicker from "react-datepicker";
import christian from '../../img/christian.png'
import Assets from './../../assets'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

export default function SellingProduct() {

  return (
    <div className='bg-light w-100 h-100 d-flex flex-row'>
    <div className="col-3 d-flex flex-column pt-5 " style={{height:"90vh",backgroundColor:"white"}}>

        <div className="justify-content-center d-flex flex-row ">
        
            <div className="d-flex flex-row h-25 justify-content-center ">
            <img src={christian} alt="" className='img rounded-pill' style={{height:"120px"}} />
            <div className="d-flex flex-column h-50 mt-3 ms-2">
            <h6>Johanes Michael</h6>
            <p>
                <img src={Assets.edit} alt="" />
                Ubah profile</p>
            </div>
        </div>
        </div>

        <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
            <p className='fw-bold'>
            <img src={Assets.homeLogo} alt="" className='me-2'/>
               Store</p>

            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <p className='fw-bold'>
                            <img src={Assets.cubeLogo} alt="" className='me-2'/>
                                products
                        </p>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='fw-bold'><Link to="/Product">My Product</Link></p>
                        <p className='fw-bold'><Link to="/Selling Product">Selling Product</Link></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <p className='fw-bold'>
                <img src={Assets.cartLogo} alt="" className='me-2'/>
                    Order
            </p>
        </div>
    </div>

    <div>
    <form>
      <h1>Selling Product</h1>
      <ul>
        <li>
          <input type="text" name="name" placeholder="Nama Product" />
        </li>
        <li>
          <input type="text" name="description" placeholder="Deskription" />
        </li>
        <li>
          <input type="number" name="stock"  placeholder="Stock" />
        </li>
        <li>
          <input type="number" name="price"  placeholder="Price" />
        </li>
        <li>
          <input type="number" name="id_category"  placeholder="id category" />
        </li>
        <li>
          <input type="file" name="photo"  placeholder="photo" />
        </li>
      </ul>
      <Button variant="secondary" style={{margin:"20px"}}>Selling</Button>
    </form>
    </div>
    </div>
)}
