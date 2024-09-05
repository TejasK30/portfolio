import { FaDocker } from "react-icons/fa";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi'
import { BsBootstrap } from 'react-icons/bs'

const Skills = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center p-4 border-2 border-[blueviolet] mt-3">
        <FaHtml5 style={{color: "blue", fontSize: "40px", margin: '10px'}} />
        <FaCss3 style={{color: "orangered", fontSize: "40px", margin: '10px'}} />
        <BsBootstrap style={{color: "blue", fontSize: "40px", margin: '10px'}} />
        <FaJs style={{color: "orange", fontSize: "40px", margin: '10px'}} />
        <FaNodeJs style={{color: "green", fontSize: "40px", margin: '10px'}} />
        <SiExpress style={{color: "black", fontSize: "40px", margin: '10px'}} />
        <BiLogoTailwindCss style={{color: "blue", fontSize: "40px", margin: '10px'}} />
        <FaReact className='animate-spin' style={{color: "blue", fontSize: "40px", margin: '10px'}} />
        <BiLogoMongodb style={{color: "green", fontSize: "40px", margin: '10px'}} />
        <FaDocker style={{color: "blue", fontSize: "40px", margin: '10px'}}/>
      </div>
    </div>
  )
}

export default Skills
