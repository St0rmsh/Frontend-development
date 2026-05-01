import React from "react";

const About = () => {
  return (
    <div className="relative overflow-hidden text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-0"></div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Artificial <br /> Intelligence
          </h1>
          <p className="text-gray-300 max-w-xl mb-8 text-lg">
            Artificial intelligence is a scientific field focused on building
            systems capable of learning, reasoning, and solving complex
            problems traditionally requiring human intelligence.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-md text-lg cursor-pointer">
            Explore
          </button>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full -top-10 -left-10"></div>
          <img
            src="src/assets/Ai Robot Innovation High Tech Ppt Robot Template Background Image, Mechanical, Future Sense, Robot Background Image And Wallpaper for Free Download (1).jpg"
            alt="AI"
            className="w-full max-w-md rounded-xl shadow-2xl relative z-10"
          />
        </div>
      </section>

      <section className="relative z-10 py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "AI For Solar", text: "Using intelligent analysis to optimize renewable energy systems." },
            { title: "AI Ideas", text: "Transforming innovative concepts into scalable solutions." },
            { title: "AI With Humans", text: "Human–AI collaboration shaping the future of work." }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#222] p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 bg-gradient-to-b from-[#1e1e1e] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technology</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              AI technology mimics cognitive functions such as perception,
              learning, and decision-making to increase efficiency, automation,
              and innovation across industries.
            </p>
            <button className="mt-8 cursor-pointer bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md">
              View More
            </button>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute w-64 h-64 bg-cyan-500 blur-3xl opacity-20 rounded-full -top-10 -right-10"></div>
            <img
              src="src/assets/Download premium image of Robot hand background, presenting technology gesture by Busbus about artificial intelligence, robot hand, future, robot, and robotic 3892590.jpg"
              alt="Technology"
              className="w-full max-w-lg mx-auto rounded-xl shadow-xl relative z-10"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute w-64 h-64 bg-purple-500 blur-3xl opacity-20 rounded-full -top-10 -left-10"></div>
            <img
              src="src/assets/Futuristic Ai Robot In A High Tech Environment, Futuristic Ai Robot, High Tech Environment, Data Streams Background Image And Wallpaper for Free Download.jpg"
              alt="Privacy"
              className="w-full max-w-lg mx-auto rounded-xl shadow-xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">AI Privacy</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Privacy-focused AI ensures data protection through encryption,
              anonymization, and responsible model design, helping maintain
              trust in intelligent systems.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
