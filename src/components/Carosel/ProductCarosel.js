import React from "react"
import productCarosel1 from "../../img/3.png"
import productCarosel2 from "../../img/1.png"
import productCarosel3 from "../../img/2.png"
import productCarosel4 from "../../img/4.png"
import styles from "./ProductCarosel.module.css"

const ProductCarosel = () => {
    return (
        <section>
          <div className={"container overflow-hidden mt-5 "+ styles.container}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active d-flex justify-content-center">
                    <img src={productCarosel1} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                    <img src={productCarosel2}className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                    <img src={productCarosel3} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                    <img src={productCarosel4} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                </div>
                <div className="carousel-item d-flex justify-content-center">
                    <img src={productCarosel1} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                    <img src={productCarosel2}className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                    <img src={productCarosel3} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
                    <img src={productCarosel4} className={"d-block w-50 mx-2 "+ styles.carouselitem} alt="..."/>
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
    </section>
)}
  
export default ProductCarosel