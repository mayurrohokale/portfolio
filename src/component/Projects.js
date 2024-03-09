import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from "../Variants"



const data = [
  {
    image: "./E-commerce.png",
    name: "E-Commerce Website",
  },
  {
    image: "./donation.png",
    name: "Donation Web site",
  },
  {
    image: "./Question.jpg",
    name: "Building!",
  },
];

function Projectdata({ image, name }) {
  return (
    <div
      className="hover:shadow-2xl shadow-black bg-cover bg-no-repeat"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="opacity-0 hover:opacity-100 hover:bg-custom-blue h-[300px] flex justify-center text-center items-center hover:bg-opacity-70 px-2 py-2">
        {/* <img src={image} alt={name} /> */}
        <p
          className="text-2xl font-semibold text-white text-center"
        >
          {name}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="projects">
      <h1 className="text-center text-[24px] md:text-[50px] font-bold mt-8">
        Projects
      </h1>
      <p className="text-center text-[16px] md:text-[20px] text-[#999999]">
        Something Built With Passion
      </p>
      <div className="grid grid-cols-1  mt-8 items-center px-11 md:grid-cols-3 gap-4 ">
        {data.map((project, index) => (
          <Projectdata key={index} image={project.image} name={project.name} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 text-center mt-16 gap-3 px-4  ">
        <div className="hover:shadow-lg px-2 py-2 shadow-2xl ">
          {" "}
          <h1 className="font-bold text-custom-blue">100</h1> <p>Milestones</p>
        </div>
        <div className="hover:shadow-lg px-2 py-2 shadow-2xl">
          {" "}
          <h1 className="font-bold text-custom-blue">100</h1>{" "}
          <p>Completed Projects</p>
        </div>
        <div className="hover:shadow-lg px-2 py-2 shadow-2xl">
          {" "}
          <h1 className="font-bold text-custom-blue">100</h1>{" "}
          <p>Work Experience</p>
        </div>
        <div className="hover:shadow-lg px-2 py-2 shadow-2xl">
          {" "}
          <h1 className="font-bold text-custom-blue">100</h1>{" "}
          <p>Cups of Cofee</p>
        </div>
      </div>

      <div
        className="mt-14 bg-cover bg-no-repeat "
        style={{
          background: "url('./snow2.jpg')",
          
        }}
      >
        {/* <img
          src="./snow.jpg"
          alt="snow"
          className="w-full object-cover h-[200px] "
        /> */}
        <div className="bg-custom-blue bg-opacity-70 text-center text-white items-center py-20 h-full flex flex-col px-44 gap-5">
          <div></div>
          <motion.p 
      variants={fadeIn("up",0.2)} 
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false }} className="font-bold md:text-[40px] text-[24px]">I'm <span className="text-[#a0f669]">Available</span> for Freelancing</motion.p>
          < motion.p 
      variants={fadeIn("up",0.2)} 
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false }}
           className="text-base md:text-[16px] text-[12px]  ">
          "Let's build something great together!"
          </motion.p>
          <motion.div 
      variants={fadeIn("up",0.2)} 
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false }}> <button className="text-base p-5 bg-custom-blue uppercase font-semibold rounded-full w-[180px] hover:text-black ">Hire Me</button></motion.div>
         
        </div>
      </div>
    </div>
  );
}
