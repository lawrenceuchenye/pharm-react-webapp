
const MobileMenu=({showNav,toggleNav})=>{
  return(
    <div className={showNav ? "right-0 w-2/3 h-[100.5vh]  absolute z-[100] top-0 shadow mnavbar--open nav" : "mnavbar--closed  nav w-0 right-0 overflow-hidden"} style={{background:"linear-gradient(rgba(0,0,139,0.6),rgba(0,0,139,0.6)"}}>
       <div className="relative">
          <i className="fa fa-times text-4xl font-bold text-white absolute top-5 left-4 p-4 ml-2" onClick={()=>toggleNav()}></i>
          <div className="absolute top-14 p-4 w-full">
             <div className="flex flex-col justify-center uppercase  mt-8 w-full tracking-wide mMenu">
               <ul>
                 <li className="p-4 mt-2">
                    <a href="/" className="text-white text-1xl  relative font-bold">Home</a>
                 </li>
                 <li className="p-4 mt-2">
                   <a href="/services/" className="text-white text-1xl font-bold">Services</a>
                 </li>
                 <li className="p-4 mt-2">
                   <a href="/about/" className="text-white text-1xl font-bold">About</a>
                  </li>
                 <li className="p-4 mt-2">
                    <a href="#" className="text-white text-1xl  relative font-bold">Share</a>
                 </li>
                 <li className="mt-8">
                    <a href="#" className="hover:animate-bounce bg-white py-2 px-4 text-black font-bold uppercase">book appointment</a>
                 </li>
                </ul>
              </div>
           </div>
         </div>
    </div>
  );
}

export default MobileMenu;
