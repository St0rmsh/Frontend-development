import React from "react";

const Section1 = () => {
  return (
    <section
      className="relative py-20 px-6 lg:px-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("src/assets/your-background-image.jpg")`, // replace with your image
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full -top-10 -left-10 blur-3xl"></div>
      <div className="absolute w-64 h-64 bg-purple-500 opacity-20 rounded-full -bottom-10 -right-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:gap-14">
        <div className="part1">
          <h3 className="text-sm md:text-xl lg:text-2xl font-mono uppercase tracking-widest text-gray-300">
            Introduction
          </h3>
        </div>

        <div className="part2">
          <h1 className="font-mono text-3xl md:text-5xl lg:text-7xl leading-tight lg:leading-snug tracking-tight">
            CYBORG <br /> CHRONICLES
          </h1>
        </div>

        <div className="part3 max-w-3xl">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-mono text-gray-200 leading-snug mb-4">
            Unveil the Evolution of Human- <br /> Machine Integration
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ullam, rem voluptatibus? Magnam, delectus sed! Qui <br />
            aperiam odit laboriosam officiis illo? Experience the fusion <br />
            of man and machine like never before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
