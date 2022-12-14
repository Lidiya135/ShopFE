import React from "react";
import "./Checkout.module.css";
import Jas from "../../img/formalsuitblack.png";
import Jaket from "../../img/jaketjeans.png";
import styles from "./Checkout.module.css"
// import Nav1 from "../../components/Nav1";

export default function Checkout() {
  return (
    <div>
    {/* <Nav1 /> */}
    <div className={styles.container1}>
      <div className="container fluid mb-2 " style={{width:"600px", height:"900px, marginLeft:50px"}}>
        <div className="container">
          <h3 style={{fontWeight: "bold",}}> Checkout</h3>
          <span style={{fontSize:"20px", paddingBottom: "20px",fontWeight: "bold",}} >
            Shipping Address
          </span>
        </div>

        <div className="container-left shadow p-3 mb-5 mt-5 bg-body rounded">
          <div className="container text-start" style={{ marginBottom: "13px" }}>
            <div className="row align-items-center">
              <h6 style={{ fontWeight: "bold" }}>Andreas Jane</h6>
              <p>
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [ Note: blok c 16] Sokaraja, Kab. Banyumas, 53181
              </p>
                <button className="btn btn-gray btn-outline-Secondary btn-block btn-md" id="button-cust-3">
                  Choose another address
                </button>
            </div>
          </div>
        </div>
        <div className="container-left shadow p-3 mb-5 bg-body rounded">
          <div className="container text-start" style={{ marginBottom: "10px" }} >
            <div className="row align-items-center">
              <div className="col">
                <img src={Jas} alt="jas"style={{width:"100px"}} />
              </div>
              <div className="col">
                <h6>Men's formal suit - Black</h6>
                <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
              </div>
              <div className="col">
                <h6 style={{ marginLeft: "50px" }}>$ 20.0</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={"container-left shadow p-3 mb-5 bg-body rounded "}>
          <div className="container text-start" style={{ marginBottom: "10px" }}>
            <div className="row align-items-center">
              <div className="col" style={{ height: "100px" }}>
                <img src={Jaket} alt="jaket" style={{width:"100px"}} />
              </div>
              <div className="col">
                <h6>Men's Jacket jeans</h6>
                <h6 style={{ color: "#9b9b9b" }}>Zalora Cloth</h6>
              </div>
              <div className="col">
                <h6 style={{ marginLeft: "50px" }}>$ 20.0</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className= "container-left shadow p-3 mb-5 bg-body rounded" style={{width:"400px", height:"250px", marginTop:"160px"}}>
      <h5>Shopping summary</h5>
        <div className="d-flex justify-content-between pt-3">
          <span className= ""style= {{color: "grey", fontWeight: "500"}}>Order</span>
          <span>$ 40.0</span>  
        </div>
        <div className="d-flex justify-content-between pt-3">
          <span className="" style={{color: "grey", fontWeight: "500"}}>Delivery</span>
          <span>$ 5.0</span>
        </div>
        <div className="d-flex justify-content-between pt-3">
          <h6>Shopping summary</h6>
          <h6 className= "" style={{color:"red"}}>$ 45.0</h6>
        </div>
        <div className="d-grid gap-2 col-14 mx-auto pt-3">
            <button type="button" className="btn btn-danger">Buy</button>
        </div>
      </div>
    </div>
    </div>
  );
}