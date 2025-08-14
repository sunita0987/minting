import React from "react";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { FEATURE_DATA } from "../utils/helper";
import mint from "../assets/images/mint.png";

const Mint = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b1220] to-[#0f1d3a] min-h-screen text-[#ffffff]">
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <img src={mint} alt="Mint Your Bat" className="max-w-sm w-full" />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-xl md:text-2xl font-bold mb-4 ff-poppins">
            Mint Your Bat
          </h1>
          <p className="mb-2">
            Minting: <span className="font-semibold">1.5 SOL</span>
            <p className="text-[#FFFFFF] opacity-50 line-through">
              Before 2 SOL
            </p>
          </p>
          <p className="mb-6">
            Whitelist: <span className="font-semibold">0.88 SOL</span>
            <p className="text-[#FFFFFF] opacity-50 line-through">
              Before 1 SOL
            </p>
          </p>
          <button className="  mt-10 px-6 py-2 rounded-full mb-6 cursor-pointer bg-[#ffffff] text-[#001D49] hover:bg-[#001D49] hover:text-[#ffffff]">
            Coming soon
          </button>

          <div className="flex justify-center lg:justify-start gap-4 text-xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:underline"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fffffff] hover:underline"
            >
              <FaTwitter />
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:underline"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-[#1b2540] rounded-2xl p-3 shadow-lg hover:shadow-xl transition py-7"
            >
              <img src={item.img} alt={item.title} className="w-25 h-25 mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mint;
