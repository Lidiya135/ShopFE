import React, {useState, useEffect} from "react";
import axios from "axios";
// import jacket from "../../img/jacket.png"
// import pants from "../../img/pants.png"
// import short from "../../img/short.png"
// import tsirt from "../../img/T-shirt.png"
// import shoes from "../../img/shoes.png"
import styles from "./CategoryCarosel.module.css";
import { Link } from "react-router-dom";

const CategoryCarosel = () => {
        const [data, setData] = useState([]);
        const token = localStorage.getItem("token");
        // const navigate = useNavigate ();
        const users= {
        headers: {
        Authorization: `Bearer ${token}`,
        }};

        // get Data catgory
    useEffect(() => {
        axios
        .get("http://localhost:4000/products", users)
        .then ((res) => {
        console.log("get data succes");
        console.log(res.data);
        res.data &&  setData(res.data.data);
        })
        .catch((err) => {
        console.log("get data fail");
        console.log(err);
        });
    }, [])
        return (
            <section>
              <div className={"container overflow-hidden mt-5 "+ styles.container}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                  
                    <div className="carousel-item active d-flex justify-content-center">
                    {data ? (
                        data.map((item)=>(
                            <div key={item.id}>
                            <Link to ={`/detailProduct/${item.id}`} >
                            <img src={item.photo} className={"d-block w-40 mx-3 "+ styles.carouselitem1} alt="" />
                            </Link>
                            </div>
                        ))
                        ): ( <h1>...Loading</h1>
                        )}
                    </div>
                    
                    {/* <div className="carousel-item d-flex justify-content-center">
                        <img src={jacket} className={"d-block w-25 mx-3 "+ styles.carouselitem1} alt="..."/>
                        <img src={pants}className={"d-block w-25 mx-3 "+ styles.carouselitem2} alt="..."/>
                        <img src={short} className={"d-block w-25 mx-3 "+ styles.carouselitem3} alt="..."/>
                        <img src={tsirt} className={"d-block w-25 mx-3 "+ styles.carouselitem4} alt="..."/>
                        <img src={shoes} className={"d-block w-25 mx-3 "+ styles.carouselitem5} alt="..."/>
                    </div> */}
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