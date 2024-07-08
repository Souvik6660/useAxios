import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [open, setOpen] = useState({ title: '', description: '', img: '' });
  const [bol,setBol]=useState(true);
const API=`https://api.slingacademy.com/v1/sample-data/photos/${id}`
  async function showData() {
    try {
  
     const res = await axios.get(`${API}`);
      
      
      
      console.log('Response Data:', res.data);

      
      setOpen({
        title: res.data.photo.title,
        description: res.data.photo.description,
        img: res.data.photo.url
      });
      

     
      
    } catch (error) {
      console.error( error.message);
      setBol(false)
    }
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
 {bol==false && <h2>NO DATA FOUND</h2>}
      <h1>{open.title}</h1>
      <p>{open.description}</p>
      {open.img && <img src={open.img} alt={open.title} />}
    </>
  );
}

export default Details;
