import React from 'react'
import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Create from './Create'
import Navbar from './Navbar'
import Update from './Update'
import ProfileDetail from './ProfileDetail'
import AdminPost from './AdminPost'
function Routing() {
  return (
    <div>

<BrowserRouter>
   <Navbar></Navbar>
    <Routes>
      <Route path='/register' element={<Signup/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/profile' element={<ProfileDetail></ProfileDetail>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
      <Route path='/adminpost' element={<AdminPost></AdminPost>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Routing