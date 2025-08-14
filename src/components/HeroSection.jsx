import React from "react";
import bgImage from "../assets/images/bg.png";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#ffffff] w-[500px] mr-70">
            Vitae nunc, <span className="font-bold">blandit a odio</span>
          </h1>
          <p className="text-[#ffffff] opacity-70 max-w-md mx-auto md:mx-0">
            Semper in egestas risus id tempus. Pellentesque dolor eros
            sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
            vestibulum dolor diam.
          </p>
          <button className="bg-[#ffffff] cursor-pointer text-[#001D49] px-6 py-3 rounded-full font-medium hover:bg-[#001D49] hover:text-[#ffffff] transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
