import React, {useEffect, useState} from "react";
import axios from "axios";
import Nav1 from "../../components/Nav1";
import Star from '../../img/Star.png' 
// import Photo from '../../img/image1.jpg' 
import Button from 'react-bootstrap/Button';
import { Link, useNavigate} from 'react-router-dom'; 
import Cards from "../../components/Card";
import styles from "./DetailProduct.module.css";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailProduct = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const users_id =localStorage.getItem("id")
    const token = localStorage.getItem("token");
    const users= {
    headers: {
    Authorization: `Bearer ${token}`,
    }};
    const { id } = useParams();
    console.log(id, "my id detail product")

    useEffect(() => {
        axios
        .get(`https://zany-tan-rooster-hose.cyclic.app/products/${id}`, users)
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

      let products_id = id;
      let amount = 1;
      let total = data.price;
      const addTransaction = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('users_id', users_id);
        formData.append('products_id',products_id);
        formData.append('amount',amount);
        formData.append('total',total);
        formData.append('seller_id, seller_id')
        console.log(formData)
        axios
        .post(`https://zany-tan-rooster-hose.cyclic.app/transactions`, formData, {
            "content-type": "multipart/form-data",
        } 
    )
    .then ((res) => {
        console.log("add bag succes");
        console.log(res);
        Swal.fire("Success", "Add bag success", "success");
        navigate('/checkout')
    })
    .catch((err) => {
        console.log("Add bag failed");
        console.log(err); window.location.reload(false);
        Swal.fire("Warning", "Add bag failed", "error");
    });
    };


    return (
        <div>
            <Nav1/>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 d-flex">
                        <p><Link to ='/' style={{color:"grey"}}> Home -- </Link> </p>
                        <p style={{color:"grey"}}>Category-- </p>
                        <p style={{color:"grey"}}> T-Shirt </p>
                    </div>
                        <p style={{fontWeight:"750px", fontSize:"36px", paddingTop:"20px"}}>Detail product</p>
                </div>
            </div>
            
                <div className="container ">
                <div className="row">
                    <div className="col-lg-4 ">
                        <img src={data.photo}  className="col-lg-12 mt-5" alt=""/>
                    </div>
                    <div className="col-lg-6 offset-lg-1 ">
                        {/* <h6></h6> */}
                        <p>Zalora Shirt</p>
                        <div className='star d-flex'>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                        </div>
                        <p className='text-secondary'>Price</p>
                        <h6>{data.price}</h6>
                        <p>Color</p>
                        <button className=" border-white bg-black rounded-circle mr-3" style={{width:'36px',height:'36px'}}></button>
                        <button className="border-white bg-danger rounded-circle mr-3"style={{width:'36px',height:'36px'}}></button>
                        <button className="border-white bg-primary rounded-circle mr-3"style={{width:'36px',height:'36px'}}></button>
                        <button className="border-white bg-success rounded-circle mr-3"style={{width:'36px',height:'36px'}}></button>
                        <div>
                        <div className="d-flex ">
                            <div>
                                <p>Size</p>
                                <div class='d-flex'>
                                    <button className=" border-white rounded-circle " style={{width:'36px',height:'36px',background:'#D4D4D4'}}>-</button>
                                    <p>1</p>
                                    <button className=" border-white rounded-circle mr-3" style={{width:'36px',height:'36px',background:'#D4D4D4'}}>+</button>
                                </div>
                            </div>
                            <div className="">
                            <p>Jumlah</p>
                            <div class='d-flex'>
                                <button className=" border-white rounded-circle " style={{width:'36px',height:'36px',background:'#D4D4D4'}}>-</button>
                                <p>{amount}</p>
                                <button className=" border-white rounded-circle mr-3" style={{width:'36px',height:'36px',background:'#D4D4D4'}}>+</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-6 mr-2">
                            <Button className ='border-secondary bg-white' variant="white" style={{ width:'160px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Chat</Button>{' '}
                        </div>
                        <div className="col-lg-4 col-6">
                            <Button className ='border-secondary bg-white' variant="white" style={{ width:'160px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}} onClick={addTransaction}>Add Bag</Button>
                        </div>
                        <div className="col-lg-4">
                            <Button className ='bg-danger text-white' variant="white" style={{width:'343px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Buy</Button>{' '}
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            
            <div className='container mt-5'>
                <div className="col-12">
                    <h5>Informasi Product</h5>
                    <h6>Condition</h6>
                    <h6 className='text-danger'>New</h6>
                    <h6>{data.description}</h6>
                    {/* <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.In ultricies rutrum tempus. Mauris vel molestie orci.</p> */}
                    <p style={{'textAlign':'justify'}}>{data.description}</p>
                </div>
                <h6>Product Review</h6>
                <div>
                    <h2> 5.0</h2>
                    <div className='star d-flex mb-5'>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                        </div>
                </div>
                <h5 className='mt-5'>You can also like this</h5>
                <div className="daftarProduct ">
                    <div className="row d-flex justify-content-center g-5">
                        <div className="col-lg-3 col-6 mr-2">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6 mr-2">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-3 col-6">
                            <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DetailProduct