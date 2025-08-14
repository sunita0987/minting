import React from "react";
import { TEAM_MEMBERS } from "../utils/helper";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#0a1128] text-white">
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold mb-10">Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 mx-auto rounded-lg object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center pb-10">
        <h2 className="text-2xl font-bold">JOIN US</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-10">
        <div>
          <h3 className="font-bold text-lg">LOGO</h3>
          <p className="text-gray-400 mt-3 text-sm">
            Aenean arcu sed rhoncus sapien euismod cursus morbi lacus, blandit.
            Placerat tortor duis fames cras pellentesque dui adipiscing neque
            gravida. Scelis neque consectetur id quis pharetra.
          </p>
          <p className="mt-4 text-sm">Email@gmail.com</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Resources</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Mint your Bully</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Community</h3>
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
      </div>
    </div>
  );
};

export default Footer;
