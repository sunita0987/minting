import React from "react";
import { ROADMAP_DATA } from "../utils/helper";

const Roadmap = () => {
  return (
    <div className="bg-[#0a1628] text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-12">Roadmap</h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dashed border-[#ffffff]"></div>
        <div className="space-y-16"></div>
        {ROADMAP_DATA.map((item, index) => (
          <div key={index} className="mb-16 flex items-center w-full">
            {item.side === "left" ? (
              <>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-xl font-semibold mr-5">{item.quarter}</h3>
                  <p className="text-gray-300 text-sm mt-2 w-[300px] ml-20">
                    {item.text}
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-[#009DFF] border-[#ffffff] rounded-full border-2"></div>
                </div>

                <div className="w-1/2"></div>
              </>
            ) : (
              <>
                <div className="w-1/2"></div>
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-[#009DFF] border-[#ffffff] rounded-full border-2 "></div>
                </div>
                <div className="w-1/2 pl-8 text-left">
                  <h3 className="text-xl font-semibold ml-20">
                    {item.quarter}
                  </h3>
                  <p className="text-[#FFFFFF] opacity-70 text-sm mt-2 w-[300px] ml-20">
                    {item.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
