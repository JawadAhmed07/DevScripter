import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './pages/header'
import Home from './pages/home'
import Footer from './pages/footer'
// import Content from './pages/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )

}

export default App;
