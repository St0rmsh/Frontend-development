import React from "react";

const Section2 = () => {
  return (
    <section className="relative py-20 px-6 lg:px-24 bg-[#1e1e1e] text-white overflow-hidden">
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full -top-10 -left-10 blur-3xl"></div>
      <div className="absolute w-64 h-64 bg-pink-500 opacity-20 rounded-full -bottom-10 -right-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col gap-10 lg:gap-20 items-center lg:items-end">
        <div className="part1 flex flex-col gap-2 text-center lg:text-right">
          <h3 className="text-lg md:text-xl lg:text-2xl font-mono">
            Ethical Consideration <i className="ri-arrow-right-line text-lg"></i>
          </h3>
          <h4 className="border-b-2 border-amber-400 w-24 lg:w-32 mx-auto lg:mx-0"></h4>
        </div>

        <div className="part2 bg-[#222] rounded-3xl overflow-hidden shadow-lg w-full lg:w-[55%] md:w-[62%] xl:w-[40%]">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/35423468/pexels-photo-35423468.jpeg"
              alt="Case Study"
              className="w-full rounded-t-3xl object-cover"
            />
            <button className="absolute cursor-pointer bottom-4 left-4 px-4 py-1 text-white font-mono text-sm rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300">
              Case Study
            </button>
          </div>
          <div className="p-5">
            <p className="font-mono text-gray-300 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              illo unde repellendus hic, eligendi amet rerum eveniet! Soluta
              praesentium fuga minima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
