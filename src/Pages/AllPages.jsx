import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import HeadTail from './HeadTail'

const AllPages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/headtail' element={<HeadTail/>}/>
        </Routes>
    </div>
  )
}

export default AllPages