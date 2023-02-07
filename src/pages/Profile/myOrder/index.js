import React from 'react';
// import { Link, useParams } from 'react-router-dom';
import styles from '../MyProduct/myproduct.module.css';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Nav1 from '../../../components/Nav1';
import SideBar from '../../../components/Sidebar';
import DetailOrder from '../../../components/DetailOrder';
import ChangeStatus from '../../../components/ChangeStatus';
import CategoryModal from '../../../components/CategoryModal';
import AddProductModal from '../../../components/AddProductModal';

function   MyOrder() {
  return (
    <div className={styles.myOrderPg}>
      <Nav1 />
        <div className={styles.conten}>
          <div className={styles.sidebar}>
            <SideBar />
          </div>
          <div className={styles.maincontent}>
            <div  className={styles.ordertable}>
              <div className='d-flex justify-content-between'>
              <h3 className='pr-5'>MY Order </h3>
              <div className='d-flex ml-4 '>
                <CategoryModal/>
                <AddProductModal />
              </div>
              </div>
              <hr />
              <InputGroup className="m-3 w-50">
                <Form.Control
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  search
                </Button>
              </InputGroup>
              <div>
                <div className={styles.card}>
                  <table className={styles.table}>
                    <tr>
                      <td> Order </td>
                      <td> Status </td>
                      <td> Total_Price </td>
                      <td> Action </td>
                    </tr>
                    <tr>
                      <td> B1212U </td>
                      <td> Packaging </td>
                      <td> Rp.56000 </td>
                      <td className='d-flex gap-2'> 
                      <DetailOrder />
                      
                      <ChangeStatus />

                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MyOrder