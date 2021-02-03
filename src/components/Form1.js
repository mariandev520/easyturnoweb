import React, { Component } from "react";


import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import "../App.css";



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};


 

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      email: null,
      message: null,
    
      formErrors: {
        firstName: "",
        email: "",
        message: "",
     
      }
    };
  }

  handleSubmit = e => {

   
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
  
  


    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Su Nombre: ${this.state.firstName}
        Email: ${this.state.email}
        Mensaje: ${this.state.message}
      
      `);

      

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
     
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "necesita como minimo 3 caracteres" : "";
        break;

      case "email":
        
        formErrors.email = emailRegex.test(value)
        ? ""
        : "correo electronico no valido";
        break;

      case "message":
        formErrors.message =
          value.length < 10 ?  "necesitan como minimo 6 carateres" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

   
        


    return (
    
      <form  onSubmit={this.handleSubmit}>
        
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
         
            <div class="col-span-2 lg:col-span-1" >
              <label htmlFor="firstName"></label>
              <input class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg"
           
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span class="text-red-500 text-s italic sm:mb-2 -mx-2" >{formErrors.firstName}</span>
              )}
            </div>
            <div >
            <div class="col-span-2 lg:col-span-1 rounded-lg">
              <label htmlFor="email"></label>
              <input class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg"
              
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span  class="text-red-500 text-s italic" >{formErrors.email}</span>
              )}
              </div>
           </div>
            <div >
              
            
             
             
    <div class="col-span-4">
      <textarea cols="16" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" 
   

                placeholder="Mensaje"
                type="message"
                name="mesagge"
                noValidate
                onChange={this.handleChange}
              ></textarea>
              {formErrors.message.length > 0 && (
                <span class="text-red-500 text-s italic" >{formErrors.message}</span>
              )}
              </div>
              </div>
            </div>
            <div class="col-span-2 text-right">
            <button  type="submit" class="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32 rounded-md" >Enviar</button>
            </div>
            </div>
            </div>
        
          </form>
        
     
    );
  }
}

export default Form1;
