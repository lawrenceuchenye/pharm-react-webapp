import docs from "../assets/docs.jpg";

const AboutUsPage=()=>{
   return(
     <div className="p-4 text-center">
        <h1 className="text-4xl font-bold text-black underline my-6">About Us</h1>
        <div className="flex my-6">
            <div className="w-1/2">
                <img src={docs} alt="img"/>
              </div>
            <div className="w-1/2">
               <p>
                  We offer 24/7 availbaility give access to health 
                   care services anytime you need We offer 24/7 availbaility give access to health care services 
                  anytime you need We offer 24/7 availbaility give access to health care services anytime you need
                </p>
             </div> 
         </div>

          <div className="flex my-8">
            <div className="w-1/2">
               <p>
                  We offer 24/7 availbaility give access to health
                   care services anytime you need We offer 24/7 availbaility give access to health care services
                  anytime you need We offer 24/7 availbaility give access to health care services anytime you need
                </p>
             </div>
             <div className="w-1/2">
                <img src={docs} className="rounded-full" alt="img"/>
              </div>
         </div>

         <div className="flex my-6">
            <div className="w-1/2">
                <img src={docs} alt="img"/>
              </div>
            <div className="w-1/2">
               <p>
                  We offer 24/7 availbaility give access to health
                   care services anytime you need We offer 24/7 availbaility give access to health care services
                  anytime you need We offer 24/7 availbaility give access to health care services anytime you need
                </p>
             </div>
         </div>
       </div>
   );
}

export default AboutUsPage;
