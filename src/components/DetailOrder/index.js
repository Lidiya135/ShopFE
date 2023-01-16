import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function DetailOrder() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
         <Button variant="danger"  onClick={handleShow}>Detail order</Button>{' '}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Order - B1212U</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <table>
                        <tr>
                            <td> Nama </td>
                            <td> Catgory </td>
                            <td> Stock </td>
                            <td> Total </td>
                        </tr>
                        <tr>
                            <td> Baju kemeja </td>
                            <td> Baju </td>
                            <td> 21 </td>
                            <td> Rp.250000</td>
                        </tr>
                    </table>
                    <hr/>
                    <span> Name </span>
                        <ul>
                            <li> Shipping </li>
                            <li> Total </li>
                            <li> Status </li>
                        </ul>
                    <span> Ean, Kuningan</span>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Change status to delivery
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}
