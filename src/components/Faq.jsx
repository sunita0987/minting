// import React, { useState } from "react";
// import { FAQ_DATA } from "../utils/helper";

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[#0c1220] text-white py-16 px-6">
//       <div className="max-w-3xl mx-auto text-center">
//         <p className="text-lg md:text-xl mb-4">
//           And this just the begining, the team is working on more suprises for
//           our community. Buddybullies stronger together !!
//         </p>
//         <h2 className="text-3xl font-bold mb-10">FAQs</h2>

//         <div className="space-y-4">
//           {FAQ_DATA.map((faq, index) => (
//             <div
//               key={index}
//               className="rounded-lg bg-[#111827] overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium focus:outline-none"
//               >
//                 {faq.question}
//                 <span>{openIndex === index ? "▲" : "▼"}</span>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-4 text-gray-300 text-sm">
//                   {faq.answer}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from "react";
import { FAQ_DATA } from "../utils/helper";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0a1628] min-h-screen text-[#ffffff] flex flex-col items-center px-4 py-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">FAQs</h2>
      <div className="max-w-3xl w-full space-y-2">
        {FAQ_DATA.map((faq, index) => (
          <div
            key={index}
            className="  bg-[#031227] rounded-3xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-[#031227] cursor-pointer transition"
            >
              <span className="font-semibold">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-[#031227] text-sm text-[#ffffff] opacity-70">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Faq;
