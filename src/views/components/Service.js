import {motion} from "framer-motion";

const Service=({title,desc,link,type,delay})=>{

    const childVariant={
        start:{
         opacity:0,
         y:"30px"
        },
      finished:{
        opacity:1,
        y:0,
        transition:{
         delay:delay ? delay : 0
        }
      }
   }
   return(
     <motion.div initial="start" animate="finished"  className="smb mx-6 mt-8 w-[320px] h-[400px] relative  shadow-lg rounded" variants={childVariant}>
        <div className="sib rounded-br-full rounded px-2 rounded-bl-full rounded bg-blue-900 text-white py-10 ">
          <i className={`${type} text-7xl icon`}></i>
         </div>
        <div className="p-4 info">
           <h1 className="font-bold text-3xl mb-8">{title}</h1>
            <p>{desc}</p>
         </div>
         <a href="#" className="sbtn hover:-translate-y-2 transition ease-in-out hover:scale-105 duration-300 font-bold bg-green-500 px-6 py-3 rounded text-white shadow">Request</a>
      </motion.div>
   );
}

export default Service;
