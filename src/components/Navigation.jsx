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
      <div class="container flex flex-col items-center justify-around px-6 py-8 mx-auto text-gray-600 capitalize md:flex-row items-center justify-around px-6 py-8 mx-auto text-gray-600 capitalize">
        <a href="#profile" class="text-gray-800 font-mono font-semibold border-b-2 border-blue-500  mx-1.5 sm:mx-6">Jose Valenzuela</a>

        <a href="#skills" class="font-mono border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">Skills</a>

        <a href="#projects" class="font-mono border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>
        <div class="flex flex-row items-center justify-end">
        <a href="https://www.linkedin.com/in/jos%C3%A9-valenzuela-158499143" target="_blank" rel="noreferrer" class="text-gray-900 hover:text-blue-500 pr-1.5">
                <span class="sr-only">Linkedin</span>
                <img alt="..." src={Linkedin} class="lg: w-7 h-7 gray-400"/>
                {/* <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </svg> */}
            </a>
            <a href="https://github.com/jmvr37" target="_blank" rel="noreferrer" class="text-gray-900 hover:text-gray-800 pr-1.5">
                <span class="sr-only">GitHub</span>
                
                <svg class="w-6 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </svg>
            </a>
            <a href="mailto: jmvr37@hotmail.com" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-blue-500 pr-1.5">
                <span class="sr-only">Mail</span>
                <img alt="..." src={Mail2} class="lg: w-6 h-6 gray-400"/>
            </a>
            <a href="tel:7785130752"  class="text-gray-400 hover:text-blue-500">
                <span class="sr-only">Phone</span>
                <img alt="..." src={Phone2} class="lg: w-5 h-5 gray-400"/>
            </a>
            </div>
    </div>
</nav>
    </>
    );
}

export default Navigation;

