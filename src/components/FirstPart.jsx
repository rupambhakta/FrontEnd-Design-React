import { useState } from "react";


const CardData = [
  { id: 1, title: "Soybean Development Programme", img: "/1.png" },
  { id: 2, title: "Soybean Testing Laboratory", img: "/2.png" },
  { id: 3, title: "Membership", img: "/3.png" },
  { id: 4, title: "Soybean Development Programme", img: "/4.png" }, // duplicate for 4 cards
];


const FirstPart = () => {
    const [activeCard, setActiveCard] = useState(1);
  return (
    <div>
      <h1 className="text-center mt-8 underline text-[40px] font-bold">
        SOPA DEVELOPMENT PROGRAM
      </h1>
      <div className="flex flex-col m-auto items-center bg-[#ffffff] py-8">
        {/* Top Image Cards */}
        <div className="flex justify-around bg-[#FFE48C]">
          {CardData.map((card, idx) => {
            const isPrev = card.id === activeCard - 1;
            const isNext = card.id === activeCard + 1;
            return (
              <div
                className={`px-4 ${
                  activeCard == card.id
                    ? "bg-[#FFE48C] rounded-t-2xl"
                    : "pb-8 bg-white"
                } ${isPrev ? "rounded-br-3xl" : ""} ${
                  isNext ? "rounded-bl-3xl" : ""
                }`}
                key={card.id}
              >
                <div
                  onClick={() => setActiveCard(card.id)}
                  className={`cursor-pointer rounded-xl border-2 ${
                    activeCard === card.id
                      ? "bg-[#FFE48C] shadow-none border-none"
                      : "border-[#F3F3F3] bg-[#FFF9E5]"
                  } p-4 shadow-md transition-all w-56 flex flex-col items-center`}
                  style={{ minHeight: "240px" }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className={`h-32 w-44 rounded-lg object-cover mb-2 ${
                      activeCard === card.id ? "border-2 border-white" : ""
                    }`}
                  />
                  <p
                    className={`mt-2 text-center font-semibold ${
                      activeCard === card.id
                        ? "text-black font-bold text-lg"
                        : "text-gray-800"
                    }`}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Yellow Highlighted Info */}
        <div className="relative flex w-full max-w-5xl bg-[#FFE48C]">
          {/* Info Box */}
          <div className="flex-1 bg-[#FFE48C] p-8">
            <h2 className="text-2xl font-bold mb-4">
              Following Are The Analysis Charges For SOPA Laboratory
            </h2>
            <p className="mb-6 text-gray-700 text-lg">
              Sopa Laboratory Analysis Charges As Per Parameters, Meal/Flour,
              Oil & Fats, Gums/Soap Stock/Lecithin, Raw Material, Water
              Analysis.
            </p>
            <button className="flex items-center gap-2 rounded-full border border-black bg-white px-6 py-2 text-base font-medium shadow hover:bg-[#FFF9E3] transition">
              Know More
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFD600] text-black ml-2">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </button>
          </div>
          {/* Right Side Buttons */}
          <div className="flex flex-col gap-3 ml-6 mt-2 min-w-[180px]">
            <button className="rounded-lg border border-[#FFE48C] bg-white px-4 py-2 text-base font-semibold shadow text-left">
              + OIL SEEDS
            </button>
            <button className="rounded-lg bg-[#FFE48C] px-4 py-2 text-base font-semibold shadow text-left">
              + MEAL/FLOUR
            </button>
            <button className="rounded-lg bg-[#FFE48C] px-4 py-2 text-base font-semibold shadow text-left">
              + OILS AND FATS
            </button>
            <button className="rounded-lg bg-[#FFE48C] px-4 py-2 text-base font-semibold shadow text-left">
              + RAW MATERIAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
