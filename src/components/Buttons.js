import React from 'react';
import Email from './images/Icons/envelope-solid.svg'
import Linkedin from './images/Icons/linkedin-brands.svg'

export default function Buttons(){
    return(
        <div className="button">
            
           <a href="mailto:mukherjee.sucheta90@gmail.com"><button className="email-button"><img src={Email}/> Email</button></a>
            
            <a href="https://www.linkedin.com/in/sucheta-mukherjee-07347b88/" target="_blank"><button className="linkedin-button"><img src={Linkedin}/> Linkedin</button></a>
        </div>
    )
}