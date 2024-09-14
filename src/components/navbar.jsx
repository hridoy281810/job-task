import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-10 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold text-white">
          <Link to="/" onClick={() => setActive('Home')}>
            Logoipsum
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-lg">
          {['Home', 'About Us', 'Business Units', 'Sustainability', 'Media Center', 'Career'].map((item) => (
            <Link
              key={item}
              to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActive(item)}
              className={`text-white transition duration-200 ease-in-out hover:text-gray-300 pb-1 ${
                active === item ? 'border-b-2 border-white' : ''
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setActive('Contact')}
            className={`flex items-center bg-gray-400 px-2 rounded bg-opacity-35 text-white transition duration-200 ease-in-out hover:text-gray-300 pb-1 ${
              active === 'Contact' ? 'border-b-2 border-white' : ''
            }`}
          >
            Contact
            <MdOutlineArrowOutward className="ml-2" />
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white transition-transform transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col mt-10 space-y-6 px-4">
          {['Home', 'About Us', 'Business Units', 'Sustainability', 'Media Center', 'Career'].map((item) => (
            <Link
              key={item}
              to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => {
                setActive(item);
                closeMobileMenu();
              }}
              className={`text-white transition duration-200 ease-in-out hover:text-gray-300 pb-1 ${
                active === item ? 'border-b-2 border-white' : ''
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => {
              setActive('Contact');
              closeMobileMenu();
            }}
            className={`flex items-center text-white transition duration-200 ease-in-out hover:text-gray-300 pb-1 ${
              active === 'Contact' ? 'border-b-2 border-white' : ''
            }`}
          >
            Contact
            <MdOutlineArrowOutward className="ml-2" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
