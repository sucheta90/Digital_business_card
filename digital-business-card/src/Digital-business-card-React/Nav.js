import React from 'react';
import MyImage from './images/IMG-1.png'; 
export default function Nav(){
    return (
        <div>
            <img src={MyImage} className="profile-picture"/>
            <h4 className="subject-name">Sucheta Mukherjee</h4>
            <h6 className="subject-title">Frontend Developer</h6>
            <p className="subject-website">mukherjeesucheta.website</p>
        </div>
    )
}