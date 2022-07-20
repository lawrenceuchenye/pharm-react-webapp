
const Navbar=({toggleNav})=>{
   return(
     <div className="mbd-nav py-6 flex bg-blue-900 shadow justify-between px-6 md:px-10 items-center" style={{boxShadow:"0 2px 5px 5px rgba(0,0,0,0.3)"}}>
        <div className="text-center text-white">
          <a href="/">
             <i className="fas fa-hospital mr-2 text-2xl"></i>
             <h1 className="font-bold text-4xl">UdPharm</h1>
          </a>
         </div>
       <div>
       <div className="wnd dnavbar">
           <ul className="flex uppercase text-white" style={{letterSpacing:"2px"}}>
             <li className="mr-4 font-bold">
                <a href="/">Home</a>
             </li>
             <li className="mr-4 font-bold">
               <a href="/services/">Services</a>
             </li>
             <li className="mr-4 font-bold">
               <a href="/about/">About</a>
             </li>
             <li className="mr-4 font-bold">
                <a href="#" className="text-white text-1xl  relative font-bold">Share</a>
             </li>
             <li>
              <a href="#" className="bg-white py-2 px-4 text-black font-bold uppercase">book appointment</a>
             </li>
           </ul>
        </div>
         <div className="mb">
            <i className="text-white font-bold text-3xl fa fa-bars" onClick={()=>toggleNav()}></i>
          </div>
        </div>
      </div>
   )
}

export default Navbar
