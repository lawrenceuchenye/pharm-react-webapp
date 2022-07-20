import pharm_store from "./assets/pharm_store.jpg";

import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import InfoBody from "./components/InfoBody";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

import {useState} from "react";

function Home() {
  return (
     <div>
        <div className="mcontainer relative">
           <div className=" relative top-[-1px]" style={{background:"linear-gradient(rgba(0,0,139,0.7),rgba(0,0,139,0.7)),url('https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
              <InfoBody title="We Offer Top Of The Line Services"/>
           </div>
           <Services store_img={pharm_store} />
           <About />
       </div>
    </div>
  );
}


const AppCSS={
 
};

export default Home;

