/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FaArrowDownLong, } from "react-icons/fa6";

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
    <div>
    <div className="flex flex-col justify-center items-center h-[80vh] gap-0">
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
        
    </div>
    <div className="flex justify-center mt-[-80px]">
        <FaArrowDownLong className="animate-bounce text-custom-blue w-10 h-7" />
      </div>
    </div>
    

  );
}
