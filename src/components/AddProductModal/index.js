import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';


export default function AddProductModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [data, setData] = useState([]);
    // const token = localStorage.getItem("token");
    // const user= {
    //   headers: {
    //   Authorization: `Bearer ${token}`,
    // }};
    // console.log("my token=", token);


  return (
    // <div>
        <div className='p-1'>
              <Button variant="warning" onClick={handleShow}>Add Product</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add product</Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                       <form>
                            <input type="text" placeholder="Name product" className='w-75 p-1 m-2'/><br/>
                            <input type="number" placeholder="price" className='w-75 p-1 m-2' /><br/>
                            <input type="number" placeholder="stock" className='w-75 p-1 m-2' /><br/>
                            <input type="text" placeholder="category" className='w-75 p-1 m-2' /><br/>
                            <textarea type="text" placeholder="description" className='w-75 p-1 m-2' /><br/>
                            <input type="file" placeholder="photo" className='w-75 p-1 m-2' />
                       </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                      Upload Product
                     </Button>
                    </Modal.Footer>
                </Modal>
            </div>
    // </div>
  )
}
