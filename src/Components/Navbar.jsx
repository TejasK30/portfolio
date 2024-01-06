import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <>
       <div className='flex w-full bg-violet-700 p-4 justify-between items-center'>
        <h2 className="text-bold text-xl text-white">Tejas Kumbhar</h2>
          <div className='hidden lg:flex items-center bg-violet-700 text-white'>
            <Link className="mr-3 p-2" onClick={closeMenu} to={'/'}>Home</Link>
            <Link className="mr-3 p-2 " onClick={closeMenu} to={'/about'}>About</Link>
            <Link className="mr-3 p-2 " onClick={closeMenu} to={'/projects'}>Projects</Link>
            <Link className="mr-3 p-2 " onClick={closeMenu} to={'/contact'}>Contact</Link>
          </div>
        <h3 onClick={handleMenu} className="text-white font-bold text-2xl lg:hidden"><AiOutlineMenu /></h3>
      </div>
      {
        isOpen ?
        <>
        <div className='flex flex-col w-full bg-violet-700 p-4 justify-between items-center text-white'>
            <Link className="mr-3 p-2 hover:bg-violet-800 w-full text-center" onClick={closeMenu} to={'/'}>Home</Link>
            <Link className="mr-3 p-2 hover:bg-violet-800 w-full text-center" onClick={closeMenu} to={'/about'}>About</Link>
            <Link className="mr-3 p-2 hover:bg-violet-800 w-full text-center" onClick={closeMenu} to={'/projects'}>Projects</Link>
            <Link className="mr-3 p-2 hover:bg-violet-800 w-full text-center" onClick={closeMenu} to={'/contact'}>Contact</Link>
        </div>
        </>
        :
        <>
        </>
      }
    </>
  );
};

export default Navbar;
