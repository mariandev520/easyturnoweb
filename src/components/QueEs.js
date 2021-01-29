import React from 'react';
import calendar from '../assets/img/calendar-colour.svg';

const QueEs = () => {
    return (
        <div className="container max-w-full mx-auto py-24 px-6">
            <h1
			className="text-center text-4xl text-gray-700 font-bold leading-snug" id="section1" data-aos="fade-left"
			>
			¿Qué es?
		    </h1>
            <div
                class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24  mt-3 rounded" data-aos="fade-right"
            ></div>
		    {/* <p className="text-center text-lg text-gray-700 mt-2 px-6">
			Elegí el plan que mejor se adapte a tu negocio.
		    </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  max-w-6xl mx-auto ">
                <div className=" object-contain w-72 md:w-auto" data-aos="fade-left">
                    <img className=""src={calendar} alt="calendar"/>
                </div>
                <div className="text-left font-medium text-3xl leading-10 text-gray-700 mt-2 px-6  self-center" data-aos="fade-left">
                    <p>Easy Turno es un formulario que le permite a tus clientes solicitar turnos que llegan a tu calendario.</p>
                    <div
                    class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-60  mt-3 rounded" data-aos="fade-right"
                    ></div>
                </div>
                
            </div>
        </div>
    );
}
 
export default QueEs;