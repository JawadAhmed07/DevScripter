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
<<<<<<< HEAD
=======
import Blog from "./pages/blog"

>>>>>>> 453cdd60858f9dcd1c2aca69b3d8a3667ab2f5a6
import * as React from 'react';

// import Content from './pages/content'

function App() {

  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Header/>
=======
      <Header />
>>>>>>> 453cdd60858f9dcd1c2aca69b3d8a3667ab2f5a6
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
