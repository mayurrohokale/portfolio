import { motion } from "framer-motion";
import { fadeIn } from "../Variants";


export default function Services() {
  return (
    <div id="services" >
      <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="text-center font-bold text-xl md:text-[50px] ">
        Services
      </motion.h1>
      <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="text-center text-[#999999] text-[12px] md:text-[22px] mt-8 ">
        Boost your online presence with our tailored web solutions.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11   text-center  items-center mx-auto w-[85%] md:text-[16px] text-[12px] text-[#999999] cursor-pointer mt-11">
        <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className=" rounded-xl bg-gray-300/10 hover:shadow-2xl shadow-black py-4 px-4 " id="design">
          <img src="./WebDesign.png" alt="web1" className="mx-auto my-auto" />
          <h1>WEB DESIGN</h1>
          <hr className="border-2 border-custom-blue w-1/4 mx-auto h-1/6 " />
          <p className="pt-6">
            "Elevate your brand online with our sleek, powerful web development
            services that captivate and convert."
          </p>
        </motion.div>

        <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className=" rounded-xl bg-gray-300/10 hover:shadow-2xl shadow-black py-4 px-4 " id="developer">
          <img src="./WebDev.png" alt="web2" className="mx-auto my-auto" />
          <h1>WEB DEVELOPER</h1>
          <hr className="border-2 border-custom-blue w-1/4 mx-auto h-1/6" />
          <p className="pt-6">
            "Elevate your brand online with our sleek, powerful web development
            services that captivate and convert."
          </p>
        </motion.div>

        <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className=" rounded-xl bg-gray-300/10 hover:shadow-2xl shadow-black py-4 px-4 " id="app">
          <img src="./AppDev.png" alt="app" className="mx-auto my-auto" />
          <h1>APP DEVELOPER</h1>
          <hr className="border-2 border-custom-blue w-1/4 mx-auto h-1/6" />
          <p className="pt-6">
            "Elevate your brand online with our sleek, powerful web development
            services that captivate and convert."
          </p>
        </motion.div>
      </div>
    </div>
  );


  
}
