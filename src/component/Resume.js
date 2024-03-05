export default function Resume() {
    
  return (
    <div>
      <div className="flex">
        <div className="w-1/4 h-screen bg-blue-100">
          <nav>
            <ul>
              <li>
                <a href="#page-1">Education</a>
              </li>
              <li>
                <a href="#page-2">Skills</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-3/4 h-screen ">
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

            <div>
              <img></img>
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
          </div>

          <div id="page-2" className=" mt-9">
            <div>
              <h2 className="text-[30px] font-bold text-custom-blue py-6 px-4">
                Skills
              </h2>
              
                
   
 




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
