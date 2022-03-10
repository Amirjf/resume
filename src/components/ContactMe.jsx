import './contact.css'
import React from 'react'


function ContactMe() {
    return (
        <>
      <h3 className="pt-5 pb-5 text-white">Contact Me</h3>   

      <div>
    
        <div class="contact-list">
          <div class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Gorgan</span></i></div>
          
          <div class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:+989389487675" title="Give me a call">+989389487675</a></span></i></div>
          
          <div class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:amir.mja77@gmail.com" title="Send me an email">amir.mja77@gmail.com</a></span></i></div>
          
        </div>


      </div>
    
        </>
    )
}

export default ContactMe;