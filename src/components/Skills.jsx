import React from 'react';
import Html from '../assets/images/HTML5_Badge.svg';
import Css from '../assets/images/css.png';
import Php from '../assets/images/php.svg';
import Knex from '../assets/images/knex.png';
import tablet from "../assets/lottie-animations/code-window.json";
import lottie from "lottie-web";
import desk from "../assets/lottie-animations/work-from-home-setup.json";
import design from "../assets/lottie-animations/web-design.json";


const Skills = () =>{
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#design"),
          animationData: design,
        });
      }, []);
return(
<>
<div class="text-center font-mono text-blue-700 text-5xl py-10" id="skills">
  <h1>Skills</h1>
      
</div>
<div class="flex flex-wrap items-center pt-8 h-full py-24" >
  <div class="w-full md:w-6/12 px-4 mr-auto ml-auto ">
    <div class="justify-center flex flex-wrap relative">
      <div class="my-4 w-full lg:w-6/12 px-4">
          <div class="bg-red-600 shadow-lg rounded-lg text-center p-8">
            <img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src={Html}/>
            <p class="text-lg text-white mt-4 font-semibold">HTML</p>
          </div>
          <div class="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
            <img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"/>
            <p class="text-lg text-white mt-4 font-semibold">ReactJS</p>
          </div>
          <div class="bg-indigo-600 shadow-lg rounded-lg text-center p-8 mt-8">
            <img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src={Css}/>
            <p class="text-lg text-white mt-4 font-semibold">Css</p>
          </div>
      </div>
      <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
          <div class="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
            <img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"/>
            <p class="text-lg text-white mt-4 font-semibold">
              JavaScript
            </p>
          </div>
          <div class="bg-purple-500 shadow-lg rounded-lg text-center p-8 mt-8">
            <img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src={Php}/>
            <p class="text-lg text-white mt-4 font-semibold">php</p>
          </div>
          <div class="bg-yellow-400 shadow-lg rounded-lg text-center p-8 mt-8">
            <img alt="..." class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white" src={Knex}/>
            <p class="text-lg text-white mt-4 font-semibold">Knex.js</p>
          </div>
      </div>
    </div>
  </div>

  <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-0">
    <div class="text-center inline-flex items-center justify-center mb-1">
      <div className="tablet-code" id="design"></div>
    </div>
    <h3 class="text-3xl mb-2 font-mono leading-normal">
      Full Stack Developer
    </h3>
    <p class="text-lg font-light leading-relaxed mt-1 mb-4 text-blueGray-600">
    As a Full Stack developer, I have experience building web and mobile applications using a variety of technologies.
    I have particular passion for developing and designing the front-end of an application. I like to code things from scratch, and love putting ideas to work.
    I value simplicity, clean design, and performance.
    </p>
    <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
      Dev & Design tools:
    </p>
    <div class="block pb-6">
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
      Github
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
      Bootstrap     
       </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
      Terminal
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        Tailwindcss
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        Material UI
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        Figma
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        Adobe XD
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        Wordpress
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        VS Code
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        Xcode
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        mysql
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-600 uppercase last:mr-0 mr-2 mt-2">
        expressjs
      </span>
    </div>
   
  </div>
</div>





</>


);




}

export default Skills;