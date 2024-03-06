import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Progress } from "flowbite-react";

const FEATURED_SKILLS = [
  {
    name: "HTML & CSS",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 60,
  },
  {
    name: "Angular",
    value: 60,
  },
  {
    name: "React",
    value: 70,
  },
  {
    name: "Node.js",
    value: 70,
  },
  {
    name: "Express.js",
    value: 70,
  },
  {
    name: "MongoDB",
    value: 80,
  },
  {
    name: "C",
    value: 90,
  },
  {
    name: "C++",
    value: 80,
  },
  {
    name: "Java",
    value: 70,
  },
  {
    name: "Next.js",
    value: 50,
  },
  
];

export default function Resume() {
  return (
    <div className="flex flex-row h-full lg:h-[80vh] py-20">
      <div className="bg-blue-50 hidden lg:block">
        <nav className="pt-32 px-14 text-[16px] font-bold text-black/80 ">
          <ul>
            <li>
              <a href="#page-1" className="hover:text-black ">
                Education
              </a>
            </li>
            <li>
              <a href="#page-2" className="hover:text-black ">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <div className="lg:overflow-y-scroll h-full ">
          <div id="page-1">
            <h2 className="text-[30px] font-bold text-custom-blue py-5 px-4">
              Education
            </h2>
            <div>
              <h1 className="text-[16px] font-bold text-custom-blue px-20">
                2023-2025
              </h1>
              <h1 className="text-[24px] font-bold px-20">
                Masters in Computer Application
              </h1>
              <h4 className="text-[18px] font-bold px-20 py-2">
                Savitribai Phule Pune University
              </h4>
              <p className="px-20 text-[#999999] ">
                A Computer Application Master's degree equips students with
                advanced skills in software development, database management,
                and system analysis. Graduates gain expertise in designing and
                implementing complex computer applications, preparing them for
                roles in software engineering, project management, and technical
                consulting.
              </p>
            </div>
            <hr />
            <div>
              <h1 className="text-[16px] font-bold text-custom-blue mt-8 px-20">
                2019-2023
              </h1>
              <h1 className="text-[24px] font-bold px-20">
                Bachelor of Engineering
              </h1>
              <h4 className="text-[18px] font-bold px-20 py-2">
                Savitribai Phule Pune University
              </h4>
              <p className="px-20 text-[#999999]">
                A Bachelor of Engineering in Mechanical Engineering is a
                comprehensive program that focuses on the principles of
                mechanical systems and their applications. Students learn about
                design, manufacturing, and maintenance of mechanical systems,
                including machines, engines, and tools. This degree equips
                graduates with skills in problem-solving, analytical thinking,
                and project management, making them valuable in industries
              </p>
            </div>
            <hr />
          </div>

          <div id="page-2" className=" mt-9 py-10">
            <div>
              <h2 className="text-[30px] font-bold text-custom-blue py-6 px-4">
                Skills
              </h2>

              <div className="flex flex-col md:flex-row  justify-between items-center px-10">
                {FEATURED_SKILLS.slice(0, 3).map((skill, index) => (
                  <CircularSkill key={index} {...skill} />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between items-center px-10">
                {FEATURED_SKILLS.slice(3).map((skill, index) => (
                  <SkillsBar key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircularSkill({ name, value }) {
  return (
    <div className="flex flex-col rounded-xl bg-gray-300/10 py-10 px-14 w-[250px] text-center hover:shadow-2xl shadow-black">
      <CircularProgressbarWithChildren
        value={value}
        className=""
        styles={{
          path: {
            stroke: "#3e64ff",
          },
          trail: {
            stroke: "#FFF",
          },
        }}
        strokeWidth={5}
      >
        <p className="text-[26px] font-bold">{value}%</p>
      </CircularProgressbarWithChildren>

      <h1 className="font-bold text-[20px] mt-6">{name}</h1>
    </div>
  );
}

function SkillsBar({ name, value }) {
  return (
    <div className="flex flex-col items-start gap-2 py-10">
      <div className="flex gap-2">
        <p>{name}</p>
      </div>
      {/* <progress value={value} max={100} min={0} className="bg-[#3e64ff]"> </progress> */}

      <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
}
