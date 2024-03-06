export default function Services() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl md:text-[50px] ">
        Services
      </h1>
      <p className="text-center text-[#999999] text-[16px] md:text-[24px] mt-4 ">
        Boost your online presence with our tailored web solutions.
      </p>

      <div className="grid grid-cols-3 gap-11 rounded-xl bg-gray-300/10 py-16 px-8  text-center hover:shadow-2xl shadow-black items-center mx-auto w-[85%] md:text-[16px] text-[12px]  ">
        <div>
          <img src="./WebDesign.png" alt="web1" className="mx-auto my-auto" />
          <h1>WEB DESIGN</h1>
          <hr />
          <p>
            "Elevate your brand online with our sleek, powerful web development
            services that captivate and convert."
          </p>
        </div>

        <div>
          <img src="./WebDev.png" alt="web2" className="mx-auto my-auto" />
          <h1>WEB DESIGN</h1>
          <hr />
          <p>
            "Elevate your brand online with our sleek, powerful web development
            services that captivate and convert."
          </p>
        </div>

        <div>
          <img src="./AppDev.png" alt="app" className="mx-auto my-auto" />
          <h1>WEB DESIGN</h1>
          <hr />
          <p>
            "Elevate your brand online with our sleek, powerful web development
            services that captivate and convert."
          </p>
        </div>
      </div>
    </div>
  );
}
