import React, {useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Modal } from 'react-bootstrap';

export default function CategoryModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);
    
    const getData = () => {
      axios
      .get(`https://zany-tan-rooster-hose.cyclic.app/category`)
      .then ((res) => {
        console.log("get category succes");
        console.log(res.data, "DATA DARI GET category");
        res.data &&  setData(res.data.data);
      })
      .catch((err) => {
        console.log("get skill fail");
        console.log(err);
      });
      }
      useEffect(() => {
          getData()
      }, [])

      const [updateData, setUpdateData] = useState({
        name: data.name
      })
      const handleChange = (e) => {
        setUpdateData({
          ...updateData,
          [e.target.name]:e.target.value
        })
        console.log(data)
    }

    const handleEdit = (e, id) => {
      axios
      .get(`https://zany-tan-rooster-hose.cyclic.app/category/${id}` )
      .then ((res) => {
        console.log("get category succes");
        console.log(res.data, "DATA DARI GET category by idddddd");
        res.data &&  setData(res.data.data);
      })
      .catch((err) => {
        console.log("get category fail");
        console.log(err);
      });
      }

  const handleData = async (e, id) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", updateData.name);
      console.log(formData)
     axios
      .put(`https://zany-tan-rooster-hose.cyclic.app/category/${id}`, formData, {
      "content-type": "multipart/form-data",
     })
    .then ((res) => {
      console.log("Update category succes");
      console.log(res);
      Swal.fire("Success", "Update category success", "success");
    })
    .catch((err) => {
      console.log("Update category failed");
      console.log(err);
      Swal.fire("Warning", "Update category failed", "error");
    });
  };

  const deleteData = (e, id) => {
    axios.delete(`https://zany-tan-rooster-hose.cyclic.app/category/${id}`,)
    .then((res)=>{
        console.log("delete category success")
        console.log(res)
        Swal.fire("Success", "Delete category success", "success");
        getData()
      })
      .catch((err)=>{
        console.log("delete category fail")
        console.log(err)
        Swal.fire("Warning", "Delete categoryl failed", "error");
    })
  }

  return (
         <div className='p-1'>
              <Button variant="warning" onClick={handleShow}>Category</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Category</Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                        <table >
                          <tbody>
                            {data?(
                              data.map((item)=>(
                            <tr>
                                <td  className=" p-3"><input  type="text" name="name" value={updateData.name} onChange={(e)=>handleChange(e)} placeholder={item.name}/></td>
                                <td className='d-flex gap-1'>
                                    <Button variant="warning" type="button" onClick={(e) => handleEdit(e, item.id)}>Edit</Button>{' '}
                                    <Button variant="warning" type="submit" onClick={(e) => handleData(e, item.id)}>Save</Button>{' '}
                                    <Button variant="danger" type="button" onClick={(e) => deleteData(e, item.id)} >Del</Button>{' '}
                                </td>
                            </tr>
                            ))
                            ):
                            <h1>...Loading</h1>}
                          </tbody>
                        </table>
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
