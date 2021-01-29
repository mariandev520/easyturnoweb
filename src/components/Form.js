import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const Form = () => {
    /*

    const [form, actualizarform] = useState({

        user_mail: '',
        user_name:'',
        message:''
      

    });

    const { user_mail,user_name,message} = contactos;

    if(user_mail.trim() === ''|| user_name.trim() === '' ||  message.trim() === '' ) {

        swal.Toast.fire({
            icon: 'error',
            title: 'Por favor complete todos los datos' 
          }) ;
        return;
       
        

    }
   */
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_igde7xi', 'template_test', e.target,'user_DjxbpiGhrI5bsn5NN7Lm7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Gracias!! En breve responderemos' 
          })
          e.target.reset();
}


 

    

    
    return ( 

     <form onSubmit={sendEmail}>
        <div     className="bg-gray-200 pb-32"  >
            <h1
                className="text-center text-4xl text-gray-700 font-bold leading-snug" id="section5" data-aos="fade-left"
                >
                Contacto
            </h1>
            <div
                class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24  mt-3 rounded" data-aos="fade-right"
            ></div>
            <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 rounded-lg" data-aos="fade-left">


            <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">

                <div class="col-span-2 lg:col-span-1">
                <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" name="user_name" placeholder="Nombre"/>
                </div>

                <div class="col-span-2 lg:col-span-1 rounded-lg">
                <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" name="user_email" placeholder="Email"/>
                </div>

                <div class="col-span-2">
                <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" name="message" placeholder="Mensaje"></textarea>
                </div>

                <div class="col-span-2 text-right">
                <button   type="submit" value="Send"  class="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32 rounded-md">
                    Enviar
                </button>
                </div>

            </div>
            </div>
        </div>
        </form>
        
     );
}




 
 
export default Form;