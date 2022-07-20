
import Service from "./components/Service";

const ServicesPage=()=>{
   return(
        <div className="mcontainer py-8 text-center">
            <div className="py-8">
               <h1 className="font-bold text-4xl underline">Our Services</h1>
             </div>
            <div className="spage">
               <Service 
                  delay={0.2}
                  type="fa fa-stethoscope"
                  title="Medical Diagnostics"
                  desc="We offer 24/7 availbaility give access to health care services anytime you need W" />
                <Service
                  delay={0.4}
                  type="fa fa-stethoscope"
                  title="Medical Diagnostics"
                  desc="We offer 24/7 availbaility give access to health care services anytime you need W" />
              </div>
          </div>
   );
}

export default ServicesPage;
