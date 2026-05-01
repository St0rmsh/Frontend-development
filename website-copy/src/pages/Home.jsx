import React from "react";
import Section1 from "../components/Sections/Section1/Section1";
import Section2 from "../components/Sections/Section2/Section2";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-[#1e1e1e] text-white">
      <main className="flex flex-col gap-20 lg:gap-32">
        <Section1 />

        <Section2 />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
