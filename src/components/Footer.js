
const Footer=()=>{
   return(
     <div className="bg-blue-900 text-white p-6 pb-8 footer">
          <div className="w-full text-center mb-[80px]">
              <a href="/">
                   <i className="fas fa-hospital mr-2 text-2xl"></i>
                   <h1 className="font-bold text-4xl">UdPharm</h1>
                </a>
            </div>
          <div className="w-full text-center mb-[80px]">
            <h1 className="font-bold text-2xl uppercase my-4">Useful Links</h1>
            <ul>
               <li>
                  <a href="#">Sitemap</a>
                 </li>
               <li>
                  <a href="#">Privacy Policy</a>
                 </li>
               <li>
                  <a href="#">Credits</a>
                 </li>
             </ul>
           </div>
          <div className="w-full text-center mb-[80px]">
            <h1 className="font-bold text-2xl uppercase my-4">Contact Us</h1>
            <ul>
               <li>
                  <a href="#">Facebook</a>
                 </li>
               <li>
                  <a href="#">Instagram</a>
                 </li>
                <li>
                   <a href="#">Whatsapp</a>
                </li>
             </ul>
           </div>
      </div>
   );
}

export default Footer;
