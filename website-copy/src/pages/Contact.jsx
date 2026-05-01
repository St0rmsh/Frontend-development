import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-page py-12">

      <div className="flex flex-col items-center gap-2 mb-14">
        <h1 className="font-mono text-xl tracking-wider">CONTACT US</h1>
        <div className="border-amber-400 border-2 w-8 hover:w-24 transition-all duration-300 cursor-pointer"></div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 justify-items-center lg:justify-items-start items-start" >
        <div className="font-mono text-center lg:text-left">
          <h5 className="text-sm mb-3">Contact Us</h5>
          <h2 className="text-3xl lg:text-4xl leading-tight font-semibold">
            GET IN <br /> TOUCH
          </h2>
        </div>

        <div className="contact-card">
          <i className="ri-map-pin-line text-3xl"></i>
          <h4 className="text-lg font-semibold">Office Location</h4>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet.
          </p>
          <span className="flex items-center gap-2 text-amber-400 cursor-pointer">
            Direction <i className="ri-arrow-right-line"></i>
          </span>
        </div>

        <div className="contact-card">
          <i className="ri-time-line text-3xl"></i>
          <h4 className="text-lg font-semibold">Working Hours</h4>
          <p className="text-sm text-gray-300">
            Sun – Fri : 10am – 6pm <br />
            Sat : 10am – 2pm
          </p>
          <span className="flex items-center gap-2 text-amber-400 cursor-pointer">
            Learn more <i className="ri-arrow-right-line"></i>
          </span>
        </div>

        <div className="contact-card ">
          <i className="ri-headphone-line text-3xl"></i>
          <h4 className="text-lg font-semibold">Communication</h4>
          <p className="text-sm text-gray-300">
            +123 456 7891 <br />
            the@gmail.com
          </p>
          <span className="flex items-center gap-2 text-amber-400 cursor-pointer">
            Support <i className="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-24">
  <div
    className=" bg-[#2f2f2f] rounded-md p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-cente ">
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="What's your Name?"
        className="bg-[#3a3a3a] text-white px-4 py-3 outline-none placeholder-gray-400"
      />

      <input
        type="email"
        placeholder="Your email"
        className="bg-[#3a3a3a] text-white px-4 py-3 outline-none placeholder-gray-400"
      />

      <textarea
        rows="4"
        placeholder="Message"
        className="bg-[#3a3a3a] text-white px-4 py-3 outline-none resize-none placeholder-gray-400"
      ></textarea>

      <button
        type="submit"
        className=" cursor-pointer bg-amber-400  text-black w-fit px-6  py-2 text-sm font-semibold  hover:bg-amber-500 transition">
        Send Message
      </button>
    </form>

    <div className="font-mono text-center lg:text-left">
      <h5 className="text-sm text-gray-300 mb-2">Have any query?</h5>
      <h2 className="text-3xl lg:text-4xl text-amber-400 mb-4">
        CONTACT US
      </h2>
      <p className="text-sm text-gray-400 max-w-md">
        There is necessity nor cumbersome came this evaluation no problem
        frequently quite organization man to surprise longer various values.
      </p>
    </div>
  </div>
</div>
<div className="mt-28 border-t border-gray-700">
  <div
    className=" max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <div className="font-mono">
      <h2 className="text-3xl lg:text-4xl text-amber-400 mb-4">
        Let’s talk
      </h2>

      <div className="flex gap-4 text-gray-400">
        <NavLink to="https:www.facebook.com"><i className="ri-facebook-line hover:text-amber-400 cursor-pointer"></i></NavLink>
        <NavLink to="https:www.linkedin.com"><i className="ri-linkedin-line hover:text-amber-400 cursor-pointer"></i></NavLink>
        <NavLink to="https:www.twitter.com"><i className="ri-twitter-line hover:text-amber-400 cursor-pointer"></i></NavLink>
        <NavLink to="https:www.instagram.com"><i className="ri-instagram-line hover:text-amber-400 cursor-pointer"></i></NavLink>
      </div>
    </div>

    <div className="text-sm text-gray-400 leading-relaxed space-y-3">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>

      <p className="text-gray-500">
        © 2026 S.K Agency. All rights reserved.
      </p>
    </div>
  </div>
</div>


    </div>
  );
};

export default Contact;
