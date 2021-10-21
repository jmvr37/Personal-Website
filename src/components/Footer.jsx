import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import dots from "../assets/lottie-animations/dots.json";
import Profile from '../assets/images/profile.jpeg';
import Tail from '../assets/images/tailwindcss-ar21.svg';
import lottie from "lottie-web";
import Arrow from "../assets/images/arrow-up-solid.svg";

library.add(fab)

const Footer = () =>{
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#dots"),
          animationData: dots,
        });
      }, []);
return(
   
<>


<section>

    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
  <nav class="flex flex-wrap justify-center -mx-5 -my-2">
     <div class="w-screen md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
      <div class="px-6">
        <img alt="..." src={Profile} class="shadow-lg rounded-full mx-auto max-w-120-px"/>
        <div class="pt-6 text-center">
          <h5 class="text-xl font-bold font-mono  text-blueGray-700">Jose Valenzuela</h5>
          <p class="mt-1 text-sm font-mono text-blueGray-400 uppercase font-semibold">Full Stack Dev</p>
        </div>
      </div>
    </div>
            
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
            <a href="https://www.instagram.com/jmvr37/" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-yellow-500">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
                </svg>
            </a>
            <a href="https://twitter.com/jmvr37" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-blue-400">
                <span class="sr-only">Twitter</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
                </svg>
            </a>
            <a href="https://github.com/jmvr37" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-gray-800">
                <span class="sr-only">GitHub</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-valenzuela-158499143" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-blue-500">
                <span class="sr-only">Linkedin</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </svg>
            </a>
        </div>
        <p class="mt-8 text-base leading-3 text-center text-gray-400">
            © Handcrafted by me.
        </p>
        <div class="flex flex-cols justify-center">
       
        <p class="mt-8 text-base leading-3 text-center text-gray-400">
            Made with  
        </p>
        <img alt="..." src={Tail} class="lg: w-36"/>
        </div>
        <div >
        <a href="#"  class="flex justify-center text-gray-400 w-auto">
                <span class="sr-only text-center">arrow</span>
                <img alt="..." src={Arrow} class="lg: w-5 h-5 gray-400 animate-bounce"/>
        </a>
        </div>
    </div>
</section>

      
       

</>




);
}

export default Footer;