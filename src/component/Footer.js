import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Footer() {
  return (
    <div className="bg-black mt-12 items-center ">
      <div className="grid xl:grid-cols-4 grid-cols-1 text-white px-8 py-10 gap-4 ">
        <div>
          <h1 className="text-[24px] font-bold">About</h1>
          <p className="text-[#999999]">
            "I am a passionate web developer with expertise in front-end and
            back-end technologies."
          </p>
          <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="grid grid-cols-4  mt-5  gap-2 text-[25px] text-center">
            <a href="https://twitter.com/mayurrohokale25">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/mayur_rohokale/">
              <FaInstagram />
            </a>
            <a href="https://github.com/mayurrohokale">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mayur-rohokale-397a35210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
        <div>
          <h1 className="text-[24px] font-bold">Links</h1>
          <ul className="gap-2 text-[#999999]">
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#home">Home</a>
            </li>

            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#resume">Resume</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#page-2">Skills</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#services">Services</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#projects">Projects</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#contact">Contact</a>
            </li>
          </ul>
          
        </div>
        <div>
          <h1 className="font-bold text-[22px]">Services</h1>
          <ul className="text-[#999999]">
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#design">Web Design</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#developer">Web Development</a>
            </li>
            <li className="flex items-center">
              <FaArrowRightLong className="mr-2" />
              <a href="#app">App Development</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">Have a Questions?</h1>
          <ul>
            <li className="flex items-start">
              <FaLocationDot className="mr-2 mt-2" />
              <span className="text-[#999999]">Kothrud Pune, Maharashtra</span>
            </li>
            <li className="flex items-start text-[#999999]">
              <FaPhone className="mr-2 mt-2" />
              +91 9284659472
            </li>
            <li className="flex items-start text-[#999999]">
              <MdEmail className="mr-2 mt-2 " /> mayurrohokale1041@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-white text-center py-4">
        <p>
          Copyright ©2024 All rights reserved | Crafted With{" "}
          <span className="text-[22px] text-red-600">&hearts;</span>
        </p>
      </div>
    </div>
  );
}
