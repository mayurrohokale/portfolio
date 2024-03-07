import { FaAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaEarthAsia } from "react-icons/fa6";

const Icon_arr = [
  {
    Icon: FaAddressBook,
    name:  "Address",
    description: "Pune, India"
  },
  {
    Icon: FaPhone,
    name: "Phone",
    description: "+91 9284659472",
  },

  {
    Icon: SiTelegram,
    name:"Email Address",
    description: "mayurrohokale1041@gmail.com"
  },
  {
    Icon: FaEarthAsia,
    name: "Website",
    description: "www.mayurohokale.me"
  },
];

export default function Contact() {
  return (
    <div className="mt-8">
      <div className="mt-16 text-center">
        <h1 className="font-bold text-24px md:text-[50px]">Contact Me</h1>
        <p className="text-[#999999] text-[16px] text-14px">
          "I'm always eager to hear from you! Drop me a message and let's
          connect."
        </p>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-4 px-12 py-12 items-center place-items-center ">
        
        {
          Icon_arr.map((item) => (
            <Icon {...item} />
          ))
        }

      </div>

      <div className="mt-12">Form fields</div>
    </div>
  );
}

function Icon({Icon, name, description}) {
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


