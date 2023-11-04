import './Skills.css'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BsBootstrap } from 'react-icons/bs'

const Skills = () => {
  return (
    <div>
      <div className="skills">
        <FaHtml5 className='icon' />
        <FaCss3 className='icon' />
        <BsBootstrap className='icon' />
        <FaJs className='icon' />
        <FaNodeJs className='icon' />
        <SiExpress className='icon' />
        <BiLogoTailwindCss className='icon' />
        <FaReact className='icon' />
      </div>
    </div>
  )
}

export default Skills
