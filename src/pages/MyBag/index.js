import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Nav1 from '../../components/Nav1'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import jas from '../../img/formalsuitblack.png'
import styles from "./MyBag.module.css"
import Navbar from "../../components/Navbar";

export default function MyBag() {
    
    const navigate = useNavigate();
    // const token = localStorage.getItem('token');
    // const id_user = localStorage.getItem('id');
    const [data, setData] = useState([]);
    let status= 0;

    const myBag = () => {
        axios.get(`http://localhost:4000/cart`)
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setData(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }
    useEffect(() => {
        myBag()
    }, [])
    //delete product
    const deletecart = () => {
        axios.delete(`http://localhost:4000/cart`, )
            .then((res) => {
            console.log("delete data success")
            Swal.fire("Success", "DELETE bag success", "success");
            myBag()
            })
            .catch((err) => {
            console.log("delete data fail")
            Swal.fire("Warning", "delete bag failed", "error");
            console.log(err)
            })
    }

    const handleBuy = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('status', status )
        axios
        .post(`http://localhost:4000/transactions-status`, formData,
        {headers: {
         'Content-Type': 'multipart/form-data'}
        })
        .then((res) => {
           console.log(res, "post data success")
           Swal.fire("Success", "order success, silahkan checkout dan lakukan pembayaran", "success");
            localStorage.setItem('myBag',JSON.stringify(myBag))
            navigate('/checkout')
        })
        .catch((err) => {
            console.log(err.message, 'post data fail')
            Swal.fire("Warning", "Silahkan ulangi kembali", "error");
          })
        }                            
    return (
        <div>
        <Nav1/>
        {/* <Navbar/> */}
            <div className={styles.container}> 
                <h2>My Bag</h2>
                <div className="row">
                    <div className="col-lg-8">
                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-1 col-1">
                                        <input type="checkbox" checked="checked"/>
                                    </div>
                                    <div className="col-lg-9 col-8">
                                        <h6>Select all items (2 items selected)</h6>
                                    </div>
                                    <div className="col-lg-2 col-3">
                                        <Button onClick={deletecart} variant="danger">
                                        <a  className="text-white">Delete</a>
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                            {data? (
                                data.map((product) => (
                                <div className="row">
                                    <div className="col-lg-1 col-1 p-lg-2 ">
                                        <input type="checkbox" checked="checked"/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        {/* <img src={jas} alt="" style={{ height:'69px',borderRadius:'8px'}}/> */}
                                        <img src={product.photo} alt="" style={{ height:'69px',borderRadius:'8px'}}/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        {/* <h6>Men's formal suit - Black</h6 */}
                                        <h6>{product.name}</h6>
                                        <p className={styles.toko}>Zalora Cloth</p>
                                    </div>
                                    <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                         <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>-</h4></button>
                                        <h5 className='p-2'>1</h5>
                                        <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>+</h4></button>
                                    </div>
                                    <div className="col-lg-3 col-6  p-lg-4 "><p className="text-right">{product.price}</p></div>
                                </div>
                                )
                                )):( <h1>....Loading</h1>)
                                }
                            </Card.Body>
                            </Card>
                            {/* <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-1 col-1 p-lg-2 ">
                                        <input type="checkbox" checked="checked"/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        <img src={jas} alt="" style={{ height:'69px',borderRadius:'8px'}}/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        <h6>Men's formal suit - Black</h6>
                                        <p className={styles.toko}>Zalora Cloth</p>
                                    </div>
                                    <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                         <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>-</h4></button>
                                        <h5 className='p-2'>1</h5>
                                        <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>+</h4></button>
                                    </div>
                                    <div className="col-lg-3 col-6  p-lg-4 "><p className="text-right">$ 20.0</p></div>
                                </div>
                            </Card.Body>
                            </Card> */}

                    </div>
                    <div className="col-lg-4">
                    <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div class='row d-flex'>
                                    <div className="col-lg-8 col-8">
                                        <h6>Shopping summary</h6>
                                        <p>Total Price</p>
                                    </div>
                                    <div className="col-lg-4 col-3 mt-4">
                                        <h6 className={styles.totprice}>$ 40.0</h6>
                                    </div>
                                </div>
                                <div>
                                   <Button onClick={handleBuy} className ='bg-danger' variant="white" style={{ width:'322px',height:'36px',borderRadius:'25px'}}>Buy</Button>{' '} 
                                </div>
                            </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>


        </div>
    )
}