import './Navbar.css';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        <h2>Tejas Kumbhar</h2>
        <AiOutlineMenu className='menu-bar' onClick={handleMenu} />
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li><Link to='/' className="link">Home</Link></li>
          <li><Link to='/about' className="link">About</Link></li>
          <li><Link to='/contact' className="link">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
