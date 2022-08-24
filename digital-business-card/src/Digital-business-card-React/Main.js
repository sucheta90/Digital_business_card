import React from 'react';
import Nav from './Nav'
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';


export default function Main(){
    return (
        <div className="main--container">

            <Nav/>
            <Buttons/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}