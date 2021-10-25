import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Phone2 from '../assets/images/mobile-solid.svg';
import Mail2 from '../assets/images/icons8-mail-96.png';
import Linkedin from '../assets/images/icons8-linkedin-240.png';

const Navigation = () =>{
    return (
      <>
      <nav class="bg-white" id="top">
      <div class="navContainer">
        <a href="#profile" class="navJose">Jose Valenzuela</a>

        <a href="#skills" class="navItem">Skills</a>

        <a href="#projects" class="navItem">Projects</a>
        <div class="containerSocial">
        <a href="https://www.linkedin.com/in/jos%C3%A9-valenzuela-158499143" target="_blank" rel="noreferrer" class="text-gray-900 hover:text-blue-500 pr-1.5">
                <span class="sr-only">Linkedin</span>
                <img alt="..." src={Linkedin} class="linkedin"/>
            </a>
            <a href="https://github.com/jmvr37" target="_blank" rel="noreferrer" class="text-gray-900 hover:text-gray-800 pr-1.5">
                <span class="sr-only">GitHub</span>
                
                <svg class="github" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </svg>
            </a>
            <a href="mailto: jmvr37@hotmail.com" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-blue-500 pr-1.5">
                <span class="sr-only">Mail</span>
                <img alt="..." src={Mail2} class="mail"/>
            </a>
            <a href="tel:7785130752"  class="text-gray-400 hover:text-blue-500">
                <span class="sr-only">Phone</span>
                <img alt="..." src={Phone2} class="phone"/>
            </a>
            </div>
    </div>
</nav>
    </>
    );
}

export default Navigation;

