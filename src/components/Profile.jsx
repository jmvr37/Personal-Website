import React, { useEffect, useRef } from 'react';
import lottie from "lottie-web";
import Keyboard from '../assets/images/keyboard-regular.svg';
const Profile = () =>{
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/lottie-animations/dots.json')
    })
    },[]);
  
    return (
      <>
  <section class="profileContainer" id="profile">
  
  <div class="profileCard">
              <div class="bgCard">
                <div class="cardFlex">
                  <div class="cardIcon">
                  <img alt="..." src={Keyboard} class="cardAnimation"/>
                  </div>
                  <h6 class="cardTitle">Hi, I'm Jose </h6>
                  <p class="cardText">
                  Since the beginning of my journey as a full stack developer 2 years ago, I've done over 10 projects using different technologies, such as Javascript, PHP, and ReactJS.
                  I have worked with talented people to develop digital products for a few non-profit organizations. A self-taught UI/UX designer with a natural curiosity,
                  I'm always seeking to improve my skills.
                  </p>
                </div>
              </div>
            </div>
    </section>


      </>
    );

}


    export default Profile;