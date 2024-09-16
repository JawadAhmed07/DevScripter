import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/header'
import Home from './pages/home'
import Footer from './pages/footer'
import Contact from './pages/contact'
import Services from './pages/services'
import About from './pages/about'
import Blog from './pages/blog'
import Writeforus from './pages/writeforus'
import * as React from 'react';

// import Content from './pages/content'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/writeforus' element={<Writeforus />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
