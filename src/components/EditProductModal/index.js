import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';


export default function EditProductModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    // <div>
        <div>
              <Button variant="warning" onClick={handleShow}>Edit</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit product</Modal.Title>
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
                      Update Product
                     </Button>
                    </Modal.Footer>
                </Modal>
            </div>
    // </div>
  )
}
