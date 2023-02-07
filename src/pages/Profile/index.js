import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import styles from'./Profile.module.css';
import Nav1 from '../../components/Nav1';
// import DatePicker from "react-datepicker";
// import christian from '../../img/christian.png'
// import Assets from './../../assets'
import SideBar from '../../components/Sidebar'
import Button from 'react-bootstrap/Button';
// import {Link} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";

export default function Profile() {

  const [data, setData] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  console.log(id)
  const [photo, setPhoto] = useState(null);
  const [updateData, setUpdateData] = useState({
    email: data.email,
    fullname: data.fullname,
    phone: data.phone,
    birth: data.birth,
    user_address: data.user_address,
    gender: data.gender
  })

  useEffect(() => {
    axios
    .get("https://zany-tan-rooster-hose.cyclic.app/users/profile", users)
    .then ((res) => {
      console.log("get data succes");
      console.log(res.data);
      res.data &&  setData(res.data.data[0]);
    })
    .catch((err) => {
      console.log("get data fail");
      console.log(err);
    });
  }, [])

  const handlePhoto = (e) =>{
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  };
  
  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]:e.target.value
    })
    console.log(data)
  }
    const users= {
        headers: {
        Authorization: `Bearer ${token}`,
      },};

    const handleData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", updateData.fullname);
        formData.append("email", updateData.email);
        formData.append("phone", updateData.phone);
        formData.append("gender", updateData.gender);
        formData.append("user_address", updateData.user_address);
        formData.append("birth", updateData.birth);
        formData.append("photo", photo);
        console.log(formData)
      axios
      .put(`https://zany-tan-rooster-hose.cyclic.app/users/${id}`, formData, users, {
        "content-type": "multipart/form-data",
       })
       .then ((res) => {
        console.log("Update profile succes");
        console.log(res);
        window.location.reload(false);
        Swal.fire("Success", "Update profile success", "success");
      })
      .catch((err) => {
        console.log("Update data profile failed");
        console.log(err);
        Swal.fire("Warning", "Update profile failed", "error");
      });
     };

  return (
    <div className={styles.container}>
      <Nav1/>
        <div className='bg-light w-100 h-100 d-flex flex-row'>
          <SideBar/>  
            <div className='container p-5'>
              <h1>My Profile</h1>
              <h5 className='text-secondary mb-3'>Manage your profile information</h5>
                <div className={styles.line}></div>
                  <div className='container col-12 row'>
                    <div className='col col-8 row-8'>
                                {/* form */}
                        <div className='col col-12 row '>
                          <div className='col col-3'>
                            Name
                          </div>
                          <div className='col col-9 mb-2'>
                            <input type="text" className="form-control" 
                              name="fullname" placeholder={data.fullname} onChange={(e) => handleChange(e)} value={updateData.fullname} />
                          </div>
                        </div>
                          <div className='col col-12 row '>
                            <div className='col col-3'>
                              Email
                            </div>
                            <div className='col col-9 mb-2'>
                              <input type="text" className="form-control" 
                                name="email" placeholder={data.email } onChange={(e) => handleChange(e)} value={updateData.email} />
                            </div>
                          </div>
                            <div className='col col-12 row '>
                              <div className='col col-3'>
                                Phone Number
                              </div>
                                <div className='col col-9 mb-2'>
                                  <input type="text" className="form-control" 
                                    name="phone" placeholder={data.phone} onChange={(e) => handleChange(e)} value={updateData.phone} />
                                </div>
                            </div>
                              <div className='col col-12 row '>
                                <div className='col col-3'>
                                  Gender
                                </div>
                                <div className='col col-9  mb-2'>
                                  <input type="text" className="form-control" 
                                    name="gender" placeholder={data.gender} onChange={(e) => handleChange(e)} value={updateData.gender}/>
                                </div>

                                <div className='col col-12 row '>
                                  <div className='col col-3 '>
                                   Address
                                  </div>
                                    <div className='col col-9 mb-2'>
                                      <input type="text" className="form-control" 
                                        name="user_address" placeholder={data.user_address} onChange={(e) => handleChange(e)} value={updateData.user_address}/>
                                    </div>
                                  </div>
                                  <div className='col col-12 row'>
                                    <div className='col col-3'>
                                      Date of birth
                                    </div>
                                    <div className='col col-9 mb-2'>
                                  <input type="text" className="form-control" 
                                    name="birth" placeholder={data.birth} onChange={(e) => handleChange(e)} value={updateData.birth}/>
                                </div>
                                    {/* <div className='col col-9'>
                                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                              <div className='col col-4 text-center'>
                                <img src={data.photo} className={styles.image}alt="..."/>
                                <label htmlFor='files'>Ubah foto profile</label>
                                <input type="file" id="files" name="photo" onChange={handlePhoto} className={styles.infile}/>
                                
                              </div>
                            </div>
                              <Button variant="warning" onClick={(e) => handleData(e)} className='m-3'>
                                Save
                              </Button>
                          </div>
                        </div>
                      </div>
  )
}
