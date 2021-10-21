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

<section class="flex flex-col justify-center">
  <div class="w-full h-auto content-end laptop: w-screen h-auto py-8 px-0 content-center desktop: w-screen h-full py-8 px-0 content-center"  id="digital">
  
  </div>


  
  </section>
        

</>
    );
}

export default Header;





