import React from "react";
import Nav1 from "../../components/Nav1";
import Star from '../../img/Star.png' 
import Photo from '../../img/image1.jpg' 
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom'; 
import Cards from "../../components/Card";
import styles from "./DetailProduct.module.css"

const DetailProduct = () => {

    return (
        <div>
            <Nav1/>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-12 d-flex">
                        <p><Link to ='/' style={{color:"grey"}}> Home > </Link> </p>
                        <p style={{color:"grey"}}>Category > </p>
                        <p style={{color:"grey"}}> T-Shirt </p>
                    </div>
                        <p style={{fontWeight:"750px", fontSize:"36px", paddingTop:"20px"}}>Detail product</p>
                </div>
            </div>
            
                <div className="container ">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={Photo} alt=""/>
                    </div>
                    <div className="col-lg-6 offset-lg-1 ">
                        <h6></h6>
                        <p>Zalora Shirt</p>
                        <div className='star d-flex'>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                        </div>
                        <p className='text-secondary'>Price</p>
                        <h6>$ 20.0</h6>
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
                                <p>1</p>
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
                            <Button className ='border-secondary bg-white' variant="white" style={{ width:'160px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Add Bag</Button>{' '}
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
                    <h6>Description</h6>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.In ultricies rutrum tempus. Mauris vel molestie orci.</p>
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