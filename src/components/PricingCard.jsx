import React, { useState } from "react";

const PricingCard = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <div className="w-[539px] border-1 border-[#B3B3B3] rounded-2xl p-5 flex flex-col justify-between hover:bg-[#F8C40040] transition-all duration-200 hover:scale-102">
      <div>
        <div className="flex justify-between items-center px-2">
          <p className="text-[20px]">Full Membership </p>
          <button className="w-[131px] h-[52px] bg-[#F8C4004F] border border-dotted rounded-full font-extrabold">
            ₹ 1500
          </button>
        </div>
        <div className="px-2 text-[20px] font-bold">
          Membership Package Name{" "}
        </div>
        <div class="border-t border-dotted border-gray-400 my-4"></div>

        {/* List of Benefits */}
        <div className="flex flex-col gap-3 mt-12">

          <div className="flex gap-3">
            <img
              src="tick.png"
              alt="img"
              className="w-7 h-7 object-contain mt-1"
            />
            <p className="text-sm">
              <span className="font-bold">Soybean Processors: </span>Any soybean
              processor who does not meet the specific qualifications mentioned
              earlier in the document.
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src="tick.png"
              alt="img"
              className="w-7 h-7 object-contain mt-1"
            />
            <p className="text-sm">
              <span className="font-bold">Soybean Processors: </span>Any soybean
              processor who does not meet the specific qualifications mentioned
              earlier in the document.
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src="tick.png"
              alt="img"
              className="w-7 h-7 object-contain mt-1"
            />
            <p className="text-sm">
              <span className="font-bold">Soybean Processors: </span>Any soybean
              processor who does not meet the specific qualifications mentioned
              earlier in the document.
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src="tick.png"
              alt="img"
              className="w-7 h-7 object-contain mt-1"
            />
            <p className="text-sm">
              <span className="font-bold">Soybean Processors: </span>Any soybean
              processor who does not meet the specific qualifications mentioned
              earlier in the document.
            </p>
          </div>
          <div className="flex gap-3">
            <img
              src="tick.png"
              alt="img"
              className="w-7 h-7 object-contain mt-1"
            />
            <p className="text-sm">
              <span className="font-bold">Soybean Processors: </span>Any soybean
              processor who does not meet the specific qualifications mentioned
              earlier in the document.
            </p>
          </div>


        </div>
      </div>

      {/* end button */}
      <button
        className="flex px-4 py-2 bg-[#F3F3F3] justify-around items-center gap-2 border-2 rounded-full self-center mb-2 hover:bg-black hover:text-white hover:cursor-pointer mt-8"
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
      >
        <p className="text-[25px] font-bold">GET STARTED</p>
        <div className="bg-[#FFBF0F] h-[40px] w-[40px] rounded-full flex items-center justify-center">
          <img
            src={isBtnHovered ? "/arrow_forward.png" : "/arrow_insert.png"}
            alt=""
            className="w-8 h-8 object-contain"
            style={{ filter: "brightness(0) saturate(100%)" }}
          />
        </div>
      </button>
    </div>
  );
};

export default PricingCard;
