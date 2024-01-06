import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>      
    </BrowserRouter>
    </>
  )
}

export default App
