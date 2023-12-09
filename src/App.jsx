import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>      
    </BrowserRouter>
    </>
  )
}

export default App
