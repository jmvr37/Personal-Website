import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Phone2 from '../assets/images/mobile-solid.svg';
import Mail2 from '../assets/images/icons8-mail-96.png';
import Linkedin from '../assets/images/icons8-linkedin-240.png';

const Navigation = () =>{
    return (
      <>
      <nav className="bg-white" id="top">
      <div className="navContainer">
        <a href="#profile" className="navJose">Jose Valenzuela</a>

        <a href="#skills" className="navItem">Skills</a>

        <a href="#projects" className="navItem">Projects</a>
        <div className="containerSocial">
        <a href="https://www.linkedin.com/in/jos%C3%A9-valenzuela-158499143" target="_blank" rel="noreferrer" class="text-gray-900 hover:text-blue-500 pr-1.5">
                <span class="sr-only">Linkedin</span>
                <img alt="..." src={Linkedin} className="linkedin"/>
            </a>
            <a href="https://github.com/jmvr37" target="_blank" rel="noreferrer" class="text-gray-900 hover:text-gray-800 pr-1.5">
                <span class="sr-only">GitHub</span>
                
                <svg className="github" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </svg>
            </a>
            <a href="mailto: jmvr37@hotmail.com" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-blue-500 pr-1.5">
                <span class="sr-only">Mail</span>
                <img alt="..." src={Mail2} className="mail"/>
            </a>
            <a href="tel:7785130752"  class="text-gray-400 hover:text-blue-500">
                <span class="sr-only">Phone</span>
                <img alt="..." src={Phone2} className="phone"/>
            </a>
            </div>
    </div>
</nav>
    </>
    );
}

export default Navigation;

