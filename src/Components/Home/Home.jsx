import { useEffect, useState } from 'react'
import Skills from '../Skills/Skills'
import './Home.css'


const Home = () => {

  const[displayStartup, setDisplayStartup] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setDisplayStartup(false)
    }, 3000);
  }, [])

  return (
    <>
      <div className="App">
            <div  className='main'>
              <h1>Hello world !! 👋 </h1>
              <h1>I'm Tejas Kumbhar</h1>
              <h2>Passionate Full Stack Mern Developer from India. </h2>
              <Skills className="sk" />
            </div>
      </div>
    </>
)}

export default Home
