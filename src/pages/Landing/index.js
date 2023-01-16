import React from "react";
import Cards from "../../components/Card";
import ProductCarosel from "../../components/Carosel/ProductCarosel";
// import CategoryCarosel from "../../components/Carosel/CategoryCarosel";
import jacket from "../../img/jacket.png";
import tsirt from "../../img/T-shirt.png";
import shoes from "../../img/shoes.png";
import short from "../../img/short.png";
import pants from "../../img/pants.png";
import styles from "../../pages/Home/Home.module.css";
import style from "../../components/Carosel/CategoryCarosel.module.css"
import "@fontsource/metropolis";
import Navv from "../../components/Navv";

export default function Landing () {
    return (
        <div className={styles.Container}>
            <Navv/>
                <div>
                    <ProductCarosel />
                </div>
                <div>
                    <div className="container title my-5">
                        <h2 className='fw-bold'>Category</h2>
                        <span className='text-secondary fw-bold'>What are you currently looking for</span>
                    </div>
                </div>
                <div>
                    
                <div className={"container overflow-hidden mt-5 "+ style.container}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                    <div className="carousel-item d-flex justify-content-center">
                        <img src={jacket} className={"d-block w-25 mx-3 "+ style.carouselitem1} alt="..."/>
                        <img src={pants}className={"d-block w-25 mx-3 "+ style.carouselitem2} alt="..."/>
                        <img src={short} className={"d-block w-25 mx-3 "+ style.carouselitem3} alt="..."/>
                        <img src={tsirt} className={"d-block w-25 mx-3 "+ style.carouselitem4} alt="..."/>
                        <img src={shoes} className={"d-block w-25 mx-3 "+ style.carouselitem5} alt="..."/>
                    </div>
                  </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
                </div>

                <div className="container mt-5">
                    <h3 className="fw-bold">New</h3>
                    <span className="text-secondary fw-bold">You’ve never seen it before!</span>
                    <div className="product mt-3">
                        <div className="row d-flex justify-content-center g-5">
                        <div className="col-lg-3 col-6 mr-2">
                                <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                            </div>
                            <div className="col-lg-3 col-6 mr-2">
                                <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                            </div>
                            <div className="col-lg-3 col-6 mr-2">
                                <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                            </div>
                            <div className="col-lg-3 col-6 ">
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
                    <h3 className="mt-5 fw-bold">Popular</h3>
                    <span className='text-secondary fw-bold'>Find clothes that are trending recently</span>
                    <div className="product mt-3">
                        <div className="row d-flex justify-content-center g-5">
                            <div className="col-lg-3 col-6 mr-2">
                                <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                            </div>
                            <div className="col-lg-3 col-6 mr-2">
                                <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                            </div>
                            <div className="col-lg-3 col-6 mr-2">
                                <Cards name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                            </div>
                            <div className="col-lg-3 col-6 ">
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