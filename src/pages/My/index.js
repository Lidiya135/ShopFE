import { useState, useEffect } from "react";
import axios from 'axios';

export default function Test() {
    const [data, setData] = useState([]);
      const token = localStorage.getItem("token");
    //   const id = localStorage.getItem("user_id");
      
      console.log("myyyyyyyy token=", token);
    //   console.log("my id", id)
    
        useEffect(() => {
            axios
            .get(`http://localhost:3009/recipe`,  {
                headers: {
                Authorization: `Bearer ${token}`,
              }} 
              )
            .then ((res) => {
              console.log("get data succes");
              console.log(res.data, "data dari recipe");
              res.data && setData(res.data.data);
            })
            .catch((err) => {
              console.log("get data fail");
              console.log(err);
            });
        
      }, [])

  return (
    <div>
        <div >
                     {data? (
                        data.map((recipe)=>(
                        <div > 
                            <img alt="" key={recipe.id} id={recipe.id} src={recipe.vidio} width={350} height={480} />
                         
                        </div>
                   
                    ))):<span>....errr</span>}
                </div>
    </div>
  )
}
