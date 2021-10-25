import React from 'react';
import lottie from "lottie-web";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import digital from "../assets/lottie-animations/digital-media-3d.json";

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

<section class="headerContainer">
  <div class="animationHeader"  id="digital">
  
  </div>


  
  </section>
        

</>
    );
}

export default Header;





