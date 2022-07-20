import docs from "../assets/docs.jpg";
const About=({docs_img})=>{

  return(
    <div className="m-2 rounded abt-container shadow-md mb-8">
       <div className=".mImage p-2">
         <img className="hover:scale-105 transition ease-in-out duration-300 " src={docs} alt="docs" styles={{width:"300px"}}/>
        </div>
       <div className=" p-2 text-left">
           <h1 className="font-bold mb-4 text-4xl underline">About Us</h1>
           <div>
              <p>
                 We offer 24/7 availbaility give access to health care services anytime you need  We offer 24/7 availbaility give access to health care services anytime you need We offer 24/7 availbaility give access to health care services anytime you need
              </p>
            </div>
        </div>
     </div>
  );
}


export default About
