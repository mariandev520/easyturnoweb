import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/img/logo-easy-turno.svg';

const Navbar = () => {
    return ( 
 
<div>
    <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500">
    <div
        className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
      >
          <div className="object-contain w-20 pt-4">
            <img src={logo} alt="logo"/>
          </div>
          <div
            className="inline-block cursor-pointer md:hidden">
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8"></div>
          </div>
          <div>
          <div className="hidden md:block text-white">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block py-1 md:py-4 mr-6 cursor-pointer"
              >¿Qué es?</Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block py-1 md:py-4 hover:text-gray-100 mr-6 cursor-pointer"
              >¿Cómo funciona?</Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block py-1 md:py-4 hover:text-gray-100 mr-6 cursor-pointer"
              >Precio</Link>
              <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block py-1 md:py-4 hover:text-gray-100 mr-6 cursor-pointer"
              >FAQ</Link>
              <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block py-1 md:py-4 hover:text-gray-100 cursor-pointer"
              >Contacto</Link>
          </div>
        </div>
      </div>
    </div>
    
</div>
     );
}
 
export default Navbar;