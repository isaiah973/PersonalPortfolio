import React from "react"
import HeroImage from "../assets/h2.jpg"
import Navbar from "./Navbar"
import { FloatButton } from 'antd';
import FloatNavbar from "./FloatNavbar";
import logo from '/images/closing.png';

const HeroSection = () => {
  return (
    <div>
      <FloatNavbar/>
      <div className="w-full lg:h-[100vh] h-[55vh] sm:h-[70vh] bg-primary px-2">
        {/* <Navbar /> */}
        <div className=" w-full font-Poppins flex items-center sm:justify-start justify-center lg:space-x-64 pt-[16%] lg:pt-[12%] sm:pt-[10%] sm:pb-5">

          <div className="pb-16 h-72 flex flex-col align-center justify-center sm:items-start lg:items-start sm:pl-10">
            <div className="flex flex-col align-center text-center lg:text-left sm:text-left">
              <p className=" text-text-green">Hello, I'm</p>
              <h1 className="text-3xl lg:text-7xl sm:text-4xl font-bold text-text-white flex flex-col"><span className="font-light sm:text-5xl">ADEOLA</span><span className="sm:text-6xl">OMOTOYINBO</span></h1>
              <p className="text-3xl font-thin text-text-green lg:text-5xl sm:text-4xl sm:text-red-500 md:text-yellow-500 lg:text-white">Full-Stack Developer</p>
            </div>

            <div className="mt-4 sm:mt-5 flex align-center justify-center sm:align-left">
              <button className="py-3 bg-primary border-[1px] border-text-green text-text-white px-3 text-shadow-lg mr-6 rounded-[2px] hover:bg-text-green transition duration-300 hover:text-primary sm:px-10">Download CV</button>
              <button className="py-3 bg-text-green text-text-white border-[1px] border-text-green px-3 text-shadow-lg rounded-[2px] hover:bg-primary transition duration-300 hover:text-white hover:border-text-green hover:border-[1px]">Let's Talk</button>
            </div>

          </div>

          <div>
            <img className="hidden lg:block md:block w-96 md:w-52 " src={logo} alt="Application Logo" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection