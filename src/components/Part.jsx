import React from "react";

const Part = () => {
  return (
    <div className="flex flex-row m-auto items-center py-8 justify-around bg-[#ffffff]">
      <div className="w-1/2 flex flex-col items-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <img
            src="/dots.svg"
            alt=""
            className="absolute -top-2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 h-36"
          />
          <img
            className="rounded-br-3xl border-4 border-[#FFE48C] shadow-sm shadow-[#FFE48C] z-10"
            src="/profile.png"
            alt=""
          />
          <img
            src="/dots.svg"
            alt=""
            className="absolute -bottom-2 left-1/2 transform -translate-x-2/3 translate-y-1/3 h-36"
          />
        </div>
      </div>
      <div className="w-1/2 relative">
        <img
          className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 h-20 opacity-50"
          src="/quote.png"
          alt=""
        />
        <h2 className="text-3xl font-bold text-gray-600 absolute left-4 top-1 z-10">
          Chairman Speaks
        </h2>
        <p className="text-[20px] mt-15 text-gray-800 max-w-[600px]">
          The Soybean Processors Association of India, popularly known as SOPA,
          is the only national level body representing the soybean processors,
          farmers, exporters and brokers in India working towards the aim to
          strengthen soybeans as a viable crop. The main objective of SOPA is to
          encourage the development and promotion of Soy-Based products in the
          interest of the farmers as well as the processors.
        </p>
        <br />
        <p className="font-bold text-[20px]">Dr. Davish Jain</p>
        <img
          className="h-[28px] w-[174px]"
          src="/sign.png"
          alt=""
          style={{ filter: "brightness(0) saturate(100%)" }}
        />
      </div>
    </div>
  );
};

export default Part;
