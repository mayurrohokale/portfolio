import { FaAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaEarthAsia } from "react-icons/fa6";
import {motion} from 'framer-motion';
import {fadeIn} from "../Variants"
const Icon_arr = [
  {
    Icon: FaAddressBook,
    name: "Address",
    description: "Pune, India",
  },
  {
    Icon: FaPhone,
    name: "Phone",
    description: <a href="link" className="text-blue-500">+91 9284659472</a>,
  },

  {
    Icon: SiTelegram,
    name: "Email Address",
    description: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" className="text-blue-500">mayurrohokale1041@gmail.com</a>,
  },
  {
    Icon: FaEarthAsia,
    name: "Website",
    description: <a href="link" className="text-blue-500">www.mayurrohokale.me</a>,
  },
];

export default function Contact() {
  return (
    <div className="mt-8" id="contact">
      
      <motion.div 
      variants={fadeIn("up",0.2)} 
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false }}
      className="mt-16 text-center">
        <h1 className="font-bold text-24px md:text-[50px]">Contact Me</h1>
        <p className="text-[#999999] text-[16px] text-14px">
          "I'm always eager to hear from you! Drop me a message and let's
          connect."
        </p>
      </motion.div>

      <motion.div 
      variants={fadeIn("up",0.2)} 
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false }} className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4 px-12 py-12 items-center place-items-center ">
        {Icon_arr.map((item) => (
          <Icon {...item} />
        ))}
      </motion.div>

      <div className="flex justify-center mt-12">
        <form className="w-full max-w-lg px-4 py-4 items-center">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <textarea
              className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-custom-blue hover:text-black text-white font-semibold py-4 px-7 rounded-[30px] focus:outline-none focus:shadow-outline w-[200px] text-[16px]"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Icon({ Icon, name, description }) {
  return (
    <div className="shadow-2xl w-full hover:bg-black/5 items-center flex flex-col justify-center py-5">
      {/* <div className=" flex items-center justify-center h-16 w-16 rounded-full bg-custom-blue text-white shadow-2xl px-2 py-2 outline-2">
      <Icon className="text-2xl" />
    </div> */}
      <div className="p-7 text-white rounded-full bg-custom-blue">
        <Icon className="text-3xl " />
      </div>
      <p className="font-semibold">{name}</p>
      <p className="text-black/50">{description}</p>
    </div>
  );
}
