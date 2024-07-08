import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Pics from '../components/Pics'
import Details from '../components/Details'
function CustomRoutes() {
  return (
    <div>
<Routes>
    <Route path="/" element={<Pics/>} />
    <Route path="/:id" element={<Details/>} />
    
    
    </Routes>      
    </div>
  )
}

export default CustomRoutes
