import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ProjectComponent() {
  const[result, setResult] = useState([]);
  
  useEffect(() =>{
    let targetAPI= "https://type.fit/api/quotes";
    axios.get(targetAPI)
    .then(response=>setResult(response.data))

  },[])
  return (
    <div class="say">
      {result.length>0 ?result.map((item,index)=>{
        return <div>
          <h2>{item.text}</h2>
            <h3>{item.author}</h3>
          
        </div>     
         }):"no data"
      }
    </div>
  )
}

export default ProjectComponent