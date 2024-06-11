import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Contact from '../pages/Contact'
import Category from '../pages/Category'
import Author from '../pages/Author'

const RouteComp = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/category' element={<Category/>} />
      <Route path='/author' element={<Author/>} />
    </Routes>
    </>
  )
}

export default RouteComp