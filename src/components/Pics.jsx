import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Details from './Details'


const API ="https://api.slingacademy.com/v1/sample-data/photos"

function Pics({         }) {

const [pic,setPic]=useState([])

const [isError,SetIsError]=useState("")

const getApidata=async (url)=>{

try {
    const res=await axios.get(url)
    
    setPic(res.data.photos)
    console.log(res.data);

} catch (error) {
    SetIsError(error.message)
}

}

useEffect(()=>{

getApidata(`${API}/?offset=5&limit=20`)

},[])





  return (
    <>
      {isError !==" " && <h2>{isError}</h2>}



      <div className="pics-grid">
        {
          pic.map((p) => (
           
            <div key={p.id}>

          <Link to={`/${p.id}`}>  <img src={p.url} alt={p.title} />  </Link>  

            </div>
          ))
        }
      </div>












    </>
  )
}

export default Pics
