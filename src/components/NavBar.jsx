import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full  px-6 py-4 flex justify-between items-center z-50 text-white">
      <div className="text-xl font-bold cursor-pointer">Logo</div>
      <ul className="hidden md:flex space-x-10">
        {["Minting", "Road Map", "Faq", "Team", "Join Us"].map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-blue-400 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        {open ? (
          <X
            className="w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        ) : (
          <Menu
            className="w-7 h-7 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-gray-800 md:hidden transform transition-transform duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {["Minting", "Road Map", "Faq", "Team", "Join Us"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
