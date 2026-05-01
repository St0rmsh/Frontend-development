import React from "react";

const Resources = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f111a] to-[#1b1b2a] text-white min-h-screen">

      <section className="relative bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 w-full h-full py-32 px-6 flex flex-col justify-center items-start max-w-7xl mx-auto">
          <span className="text-sm uppercase tracking-widest text-gray-400 mb-3">New Insights</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with AI
          </h1>
          <p className="text-gray-300 max-w-xl mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 px-6 py-3 rounded-md text-lg transition">
            Read Now
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {["AI Insights", "Business Strategy", "Operational Efficiency", "Customer Satisfaction"].map((item, i) => (
          <div
            key={i}
            className="bg-[#1b1b2f] p-6 rounded-xl hover:scale-105 transition transform duration-300 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, corrupti.
            </p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            New- Gen AI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 px-6 py-3 rounded-md transition">
            Learn More
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
            alt="AI Hand"
            className="w-full max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Connecting Expertise Globally</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
            alt="Business AI"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </section>

    </div>
  );
};

export default Resources;
