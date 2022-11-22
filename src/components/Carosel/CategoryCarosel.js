import React from "react"
import jacket from "../../img/jacket.png"
import pants from "../../img/pants.png"
import short from "../../img/short.png"
import tsirt from "../../img/T-shirt.png"
import shoes from "../../img/shoes.png"
import styles from "./CategoryCarosel.module.css"

const CategoryCarosel = () => {
        return (
            <section>
              <div className={"container overflow-hidden mt-5 "+ styles.container}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center">
                        <img src={jacket} className={"d-block w-25 mx-3 "+ styles.carouselitem1} alt="..."/>
                        <img src={pants}className={"d-block w-25 mx-3 "+ styles.carouselitem2} alt="..."/>
                        <img src={short} className={"d-block w-25 mx-3 "+ styles.carouselitem3} alt="..."/>
                        <img src={tsirt} className={"d-block w-25 mx-3 "+ styles.carouselitem4} alt="..."/>
                        <img src={shoes} className={"d-block w-25 mx-3 "+ styles.carouselitem5} alt="..."/>
                    </div>
                    <div className="carousel-item d-flex justify-content-center">
                        <img src={jacket} className={"d-block w-25 mx-3 "+ styles.carouselitem1} alt="..."/>
                        <img src={pants}className={"d-block w-25 mx-3 "+ styles.carouselitem2} alt="..."/>
                        <img src={short} className={"d-block w-25 mx-3 "+ styles.carouselitem3} alt="..."/>
                        <img src={tsirt} className={"d-block w-25 mx-3 "+ styles.carouselitem4} alt="..."/>
                        <img src={shoes} className={"d-block w-25 mx-3 "+ styles.carouselitem5} alt="..."/>
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
    )
}

export default CategoryCarosel