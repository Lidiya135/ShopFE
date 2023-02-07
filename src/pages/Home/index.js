import React from "react";
import Cards from "../../components/Card";
// import Navbar from "../../components/Navbar";
import ProductCarosel from "../../components/Carosel/ProductCarosel";
import CategoryCarosel from "../../components/Carosel/CategoryCarosel";
import styles from "./Home.module.css"
import "@fontsource/metropolis"
import Nav1 from "../../components/Nav1";

export default function Home () {
    return (
        <div className={styles.Container}>
            <Nav1 />
            {/* <Navbar /> */}
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
                    <CategoryCarosel />
                </div>

                <div className="container mt-5">
                    <h3>New</h3>
                    <span>You’ve never seen it before!</span>
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
                    <h3 className="mt-5">Popular</h3>
                    <span>Find clothes that are trending recently</span>
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