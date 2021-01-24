import React from 'react';
import { Link } from 'react-scroll';
import mobil from '../assets/img/mobil.png'

const Main = () => {
    return ( 
        <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 ">
              <div className="px-4 py-20 md:py-4 ">
                <div className="md:max-w-6xl md:mx-auto ">
                  <div className="md:flex md:flex-wrap">
                    <div className=" md:w-1/2 text-center md:text-left md:pt-16">
                      <h1
                        className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4">
                        La manera más fácil de gestionar tus turnos.
                      </h1>

                      <p className="text-white md:text-xl md:pr-48">
                        Con tu calendario gestionás los turnos que llegan desde un formulario online personalizado para tu negocio.
                      </p>

                      <Link
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white hover:bg-blue-600 rounded-lg shadow bg-blue-500 cursor-pointer"
                        >Contáctanos</Link>
                    </div>
                      <div className=" md:w-1/2 absolute inset-y-0 right-0 mt-40">
                        <img src={mobil} alt="mobil"/>
                      </div>
                  </div>
                </div>
              </div>
            <svg
              className="fill-current text-white hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
            </svg>
        </div>
     );
}
 
export default Main;
