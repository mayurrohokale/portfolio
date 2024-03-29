/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FaAngular, FaArrowDownLong, } from "react-icons/fa6";
import {motion} from 'framer-motion';
import {fadeIn} from "../Variants";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";


const ChangingWord = ({ words, wordIndex, changingColor, staticColor }) => {
  const [typedWord, setTypedWord] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= words[wordIndex].length) {
        setTypedWord(words[wordIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex, words]);

  return (
    <h2 className="text-[32px] font-bold pt-2">
      <span className={staticColor}> I'm a </span>
      <span className={changingColor}>{typedWord}</span>
    </h2>
  );
};

export default function MainComponent() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Developer.", "Coder."];

  const changingColor = "text-custom-blue"; // Use Tailwind CSS color class
  const staticColor = "text-black";

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval); //cleanup
  }, []);

  return (
    <div >
    <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="flex flex-col justify-center items-center h-[80vh] gap-0">
      <h4 className="text-[16px] font-bold uppercase text-custom-blue ">
        Hey! I AM
      </h4>
      <h1 className=" text-[40px] md:text-[60px] font-bold text-center">Mayur Rohokale</h1>
      <ChangingWord
        words={words}
        wordIndex={wordIndex}
        changingColor={changingColor}
        staticColor={staticColor}
      />
      <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="items-center flex flex-row gap-4 mt-8 text-[25px]">
      <FaHtml5 />
      <SiTailwindcss />
      <RiJavascriptFill />
      <FaAngular/>
      <FaReact/>
      <SiNextdotjs />
      </motion.div>
        
    </motion.div>
    <div className="flex justify-center mt-[-80px]">
        <FaArrowDownLong className="animate-bounce text-custom-blue w-10 h-7" />
      </div>
    </div>
    

  );
}
