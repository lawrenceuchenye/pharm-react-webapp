
const Services=({store_img})=>{
  return(
    <div className="p-4 my-4 sdm-container">
       <div className="md:w-1/2 sd-container">
         <div className="hover:scale-105 opacity-50 hover:opacity-100 transition eaee-in-out duration-300  flex rounded p-2 py-4 shadow-md mb-2">
           <div className="mr-3 p-2 mt-[-20px]">
              <i className="text-blue-900 fa fa-clock text-5xl my-4"></i>
           </div>
           <div>
              <h1 className="mb-3 font-bold text-2xl">24/7 Services</h1>
              <p>We offer 24/7 availbaility give access to health care services anytime you need</p>
           </div>
          </div>

          <div className="hover:scale-105 transition opacity-50 hover:opacity-100 ease-in-out duration-300  flex rounded p-2 py-4 shadow-md mb-2">
           <div className="mr-3 p-2 mt-[-20px]">
              <i className="text-blue-900 fa fa-medkit text-5xl my-4"></i>
           </div>
           <div>
              <h1 className="mb-3 font-bold text-2xl">Medical Supplies</h1>
              <p>We offer 24/7 availbaility give access to health care services anytime you need</p>
           </div>
          </div>

          <div className="hover:scale-105 opacity-50 hover:opacity-100 transition ease-in-out duration-300  flex rounded p-2 py-4 shadow-md">
           <div className="mr-3 p-2 mt-[-20px]">
              <i className="text-blue-900 fa fa-store text-5xl my-4"></i>
           </div>
           <div>
              <h1 className="mb-3 font-bold text-2xl">Convience Store</h1>
              <p>We offer 24/7 availbaility give access to health care services anytime you need</p>
           </div>
          </div>
        </div>
        <div className="imgDiv m-5 p-2">
         <img className="mImage" src={store_img} alt="store" style={{width:"100%",height:"100%"}}/>
         </div>
     </div>
   );
}

export default Services;
