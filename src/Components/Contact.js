import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>
               <p><a href="matt.d.baldwin@gmail.com?subject=Contact">matt.d.baldwin@gmail.com</a> </p>
            </div>


         </div>

         
   </section>
    );
  }
}

export default Contact;
