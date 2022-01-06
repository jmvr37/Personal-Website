import React from 'react';
import Larivo from '../assets/images/larivo.png';
import Instanews from '../assets/images/instanews.jpeg';
import Boomtown from '../assets/images/boomtown.png';
// import R20 from '../assets/images/R20.jpeg';
import Beyond from '../assets/images/beyond2.jpeg';
import Dimsum from '../assets/images/dimsum-app.png';
import Pollution from '../assets/images/pollution.png';

const Projects = () =>{
    return (
      <>
  <div class="text-center font-mono text-blue-700	 text-5xl py-10" id="projects">
  <h1>Projects</h1>
  </div>
 <div class="grid grid-cols-1 gap-4 py-8 px-8  md:grid-cols-2 gap-3 lg:grid-cols-3 gap-4 h-full">    
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:max-w-2xl">
  <div>
    <div>
      <img alt="Larivo app" class="h-48 w-full object-cover" src={Larivo}/>
    </div>
    <div class="p-8">
      <div class="tracking-wide text-lg text-indigo-500 font-semibold">Larivo Mental Health App</div>
      <a href="https://github.com/redacademy/larivo-WS2-2019" target="_blank" rel="noreferrer" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Source Code</a>
      <p class="mt-2 text-gray-500 text-base subpixel-antialiased">An Agile team of three people worked with a real client based in Vancouver, developed an iOS application that allows the user to create an account and share stories about mental health, as well as get support from other users, you can follow users on the app, and search for stories by hashtag. The app's design was developed by RED Academy's team of three designers.</p>
    </div>
  </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:max-w-2xl">
  <div>
    <div>
      <img alt="Boomtown app" class="h-48 w-full object-cover" src={Boomtown}/>
    </div>
    <div class="p-8">
      <div class="tracking-wide text-lg text-indigo-500 font-semibold">Boomtown</div>
      <a href="https://github.com/jmvr37/boomtown" target="_blank" rel="noreferrer" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Source Code</a>
      <p class="mt-2 text-gray-500 text-base">This sharing application was developed using React and Material UI for styles, In addition to the back-end server that supports the sharing interface, logging in and creating new users. The database was built using Postgres & Postico and Hook using Apollo.</p>
    </div>
  </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:max-w-2xl">
  <div>
    <div>
      <img alt="Instanews app" class="h-48 w-full object-cover" src={Instanews}/>
    </div>
    <div class="p-8">
      <div class="tracking-wide text-lg text-indigo-500 font-semibold">New York Times Api</div>
      <a href="https://github.com/jmvr37/Instanews-App" target="_blank" rel="noreferrer" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Source code</a>
      <p class="mt-2 text-gray-500 text-base">A simply formatted webpage that pulls top stories of different genres from the New York Times database.</p>
    </div>
  </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:max-w-2xl">
  <div>
    <div>
      <img alt="R20 app"  class="h-48 w-full object-cover" src={Pollution}/>
    </div>
    <div class="p-8">
      <div class="tracking-wide text-lg text-indigo-500 font-semibold">Air Quality Chart App</div>
      <a href="https://pollution-chart.netlify.app/" target="_blank" rel="noreferrer" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Live Site</a>
      <p class="mt-2 text-gray-500 text-base">This project was bootstrapped with Create React App to create the frond-end User Interface using ReactJs. At the backend, Real-time Air Quality data feed are used to get the details of the Air Quality.</p>
    </div>
  </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:max-w-2xl">
  <div>
    <div>
      <img alt="Beyond app" class="h-48 w-full object-cover" src={Beyond}/>
    </div>
    <div class="p-8">
      <div class="tracking-wide text-lg text-indigo-500 font-semibold">Beyond the Conversation</div>
      <a href="https://github.com/redacademy/beyond-ws1-2019" target="_blank" rel="noreferrer" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Source Code</a>
      <p class="mt-2 text-gray-500 text-base">A team of three Agile developers worked with a non-profit organization based in Vancouver that helps people with mental health issues find support in their communities. The website design was implemented by another team of UX/UI designers from RED Academy.</p>
    </div>
  </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:max-w-2xl">
  <div>
    <div>
      <img alt="Dimsum app" class="h-48 w-full object-cover" src={Dimsum}/>
    </div>
    <div class="p-8">
      <div class="tracking-wide text-lg text-indigo-500 font-semibold">Self-Order App</div>
      <a href="https://github.com/jmvr37/self-order" target="_blank" rel="noreferrer" class="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Source Code</a>
      <p class="mt-2 text-gray-500 text-base">In a team of three people, we developed a desktop, tablet and mobile dimsum restaurant web application that lets the customer order food straight from the table via their mobile phones. After we presented our project to teachers and classmates, it was well received for its good user interface.</p>
    </div>
  </div>
</div>
</div>
      </>

    )};

export default Projects;