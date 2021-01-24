import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Arrow = () => {
    
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return ( 
            
            <button
                onClick={ scrollToTop }
                className="w-24 fixed bottom-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#6D28D9">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        
     );
}
 
export default Arrow;