
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";


import Home from "./Home";
import ServicesPage from  "./views/ServicesPage";
import AboutUsPage from "./views/AboutUsPage";

import {useState} from "react";

function App() {
  const [showNav,setShowNav]=useState(false);

  const ToggleNav=()=>{
    setShowNav(!showNav);
  }
  return (
     <Router>
       <div className="h-[100vh]">
           <Navbar toggleNav={ToggleNav}/>
           <MobileMenu showNav={showNav} toggleNav={ToggleNav} />
           <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
           <Routes>
              <Route path="/services/" element={<ServicesPage />}/>
            </Routes>
           <Routes>
              <Route path="/about/" element={<AboutUsPage />}/>
             </Routes>
           <Footer />
         </div>
       </Router>
  );
}


const AppCSS={
 
};

export default App;

