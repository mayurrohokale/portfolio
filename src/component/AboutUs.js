import {motion} from 'framer-motion';
import {fadeIn} from "../Variants"



export default function AboutUs() {
  return (
    
    <div className="flex flex-col lg:flex-row px-5" id="about" >
      
        
      <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="w-full lg:w-1/2 max-h-screen  flex flex-col justify-center items-center lg:items-end">
        <img src="./profile-pic.jpg" alt="profilepicture" className='w-[500px]'/>
      </motion.div>

      <div className="w-full lg:w-1/2 h-screen bg-gray-100 px-8">
        <div className="p-0 md:p-8 ">
          <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="text-[38px] md:text-5xl font-bold pt-11 ">About Me</motion.h1>
          <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="pt-2 md:pt-3 text-gray-500 text-[16px]">As a passionate web developer from India, I strive to create innovative and impactful digital experiences that delight users. </motion.h2>
          <ul className="mt-4 md:mt-8 px-0 md:px-7">
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mb-4 md:mb-8 flex">
              <span className="font-bold text-lg md:text-2xl w-32">Name:</span>
              <span className="text-lg md:text-xl text-gray-500">Mayur Rohokale</span>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mb-4 md:mb-8 flex">
              <span className="font-bold text-lg md:text-2xl w-32">Date of Birth:</span>
              <span className="text-lg md:text-xl text-gray-500">October 25, 2001</span>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mb-4 md:mb-8 flex">
              <span className="font-bold text-lg md:text-2xl w-32">Address:</span>
              <span className="text-lg md:text-xl text-gray-500">Pune Maharashtra, India</span>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mb-4 md:mb-8 flex">
              <span className="font-bold text-lg md:text-2xl w-32">Zip code:</span>
              <span className="text-lg md:text-xl text-gray-500">414103</span>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mb-4 md:mb-8 flex">
              <span className="font-bold text-lg md:text-2xl w-32">Email: </span>
              <span className="text-sm md:text-xl text-gray-500">mayurrohokale1041@gmail.com</span>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mb-4 md:mb-8 flex">
              <span className="font-bold text-lg md:text-2xl w-32">Phone:</span>
              <span className="text-lg md:text-xl text-gray-500">+91 9284659472</span>
            </motion.li>
          </ul>
          <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="mt-4 md:mt-16">
            <button className="bg-custom-blue text-white rounded-[15px] text-2xl md:text-2xl px-6 py-2 ">Resume</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
