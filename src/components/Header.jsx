import React from 'react';
import config from "../config";
import lottie from "lottie-web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import digital from "../assets/lottie-animations/digital-media-3d.json";
import landing from "../assets/lottie-animations/home-page.json";

library.add(fab)

const Header = () =>{
    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#digital"),
          animationData: digital,
        });
      }, []);
    return(
<>
{/* <section class="w-full h-60 content-center bg-opacity-50 laptop: w-screen h-auto py-8 px-0 content-center bg-fixed bg-cover bg-center desktop: w-screen h-screen py-8 px-0 content-center bg-fixed bg-cover " style={{ backgroundImage: `url(${Triangle})`,}}> */}

<section class="flex flex-col justify-center">
  <div class="w-full h-auto content-end laptop: w-screen h-auto py-8 px-0 content-center desktop: w-screen h-full py-8 px-0 content-center"  id="digital">
  
  </div>


  
  </section>
        

</>
    );
}

export default Header;



{/* <section className="w-screen py-8 px-4 h-screen laptop: w-screen py-8 px-0 content-center">
      <div className="flex flex-col justify-center content-center px-0 py-8 w-full laptop:flex-row justify-center content-center px-20">
        <div>
        <h2 class="text-2xl ...">Hello, I'm</h2>
        <h1 class="text-3xl ...">José Valenzuela</h1>
        <i><h3>Full Stack Developer</h3></i>
        <p>I have expertise as a Full-Stack Web developer by using the most awesome technologies and frameworks
         approved by the software industry.
         I am confident my UI/UX design, HTML, CSS, Javascript, and React.</p>
         
    <ul className="social-icons">
    <a href="https://www.github.com/jmvr37" target="_blank" class="animate-pulse">
        <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="https://www.linkedin.com/in/jos%C3%A9-valenzuela-158499143/" target="_blank">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a href="https://www.twitter.com/jmvr37" target="_blank">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
    </ul>
         </div>
         <div className="logo-computer">
            <div className="logo-animation"  id="programmer" />
        </div>
      </div>
     
    </section> */}





{/* <ul className="icons">
{config.socialLinks.map(social => {
  const { style, icon, name, url } = social;
  return (
    <li key={url}>
      <a href={url} className={`icon ${style} ${icon}`}>
        <span className="label">{name}</span>
      </a>
    </li>
  );
})}
</ul> */}