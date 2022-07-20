const InfoBody=({title,body})=>{
  return(
     <div className="px-6 flex justify-between items-center h-[500px]">
        <div className="mb-container md:w-2/3 text-left">
          <h1 className="mtitle  text-4xl font-bold text-white m-4 mb-5 fade-in-up anim-delay-100">{title}</h1>
          <p className="mbody text-white m-4 mb-9 fade-in-up anim-delay-300">
            We offer top of the line services from diagnostics to medicine <br />recommendation open
            24/7 you can count on us to assit <b>You!</b>
           </p> 
           <div className="btn">
             <a href="#" className=" px-10 py-3  fade-in-up rounded-full bg-white text-black m-4 ">Explore</a>
            </div>
         </div>
      </div>
  );
}

export default InfoBody;
