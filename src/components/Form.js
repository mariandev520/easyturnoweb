import React from 'react';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, subject, message } = this.state;

    if(name==='' ) { 

        const errore = (true);

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
   
            icon: 'error',
            title: 'complete todos los campos' 
          })

    } else {

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '/*YOUR NAME OR COMPANY*/',
      subject,
      message_html: message,
    };

    

    emailjs.sendForm('service_igde7xi', 'template_test', event.target,'user_DjxbpiGhrI5bsn5NN7Lm7')
    this.resetForm();
  ;

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
    
    }
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
   
  }



  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <field>
          <label>Name</label>
          <control>
            <input
              name="name"
              type="text"
              placeholder="Your first and last name"
              value={name}
              onChange={this.handleChange}
            />
          </control>
        </field>
        <field>
          <label>Email for contact</label>
          <control>
            <input
              name="email"
              type="email"
              placeholder="email@gmail.com"
              value={email}
              onChange={this.handleChange}
            />
          </control>
        </field>
        <field>
          <label>Subject</label>
          <control>
            <input
              name="subject"
              type="text"
              placeholder="What is the subject?"
              value={subject}
              onChange={this.handleChange}
            />
          </control>
        </field>
        <field>
          <label>Message</label>
          <control>
            <textarea
              name="message"
              placeholder="Tell me more about..."
              value={message}
              onChange={this.handleChange}
            />
          </control>
        </field>

        <control kind="group">
            </control>
          <control>
            <button type="send" color="dark">Send</button>
          </control>
        
            <button text>Cancel<button>
          
        </button>
        
      </button>
      </form>
    );
  
}
}

export default Form;