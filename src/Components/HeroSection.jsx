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
      <div className="w-full h-[100vh] bg-primary flex items-center justify-center pb-36">
        {/* <Navbar /> */}
        <div className="w-full font-Poppins flex items-center justify-center space-x-64">

          <div className=" h-72 pl-4">
            <div>
              <p className=" text-text-green">Hello, I'm</p>
              <h1 className="text-7xl font-bold text-text-white flex flex-col"><span className="font-light">ADEOLA</span><span>OMOTOYINBO</span></h1>
              <p className="text-5xl font-thin text-text-green">Full-Stack Developer</p>
            </div>

            <div className="mt-12">
              <button className="py-3 bg-primary border-[1px] border-text-green text-text-white px-3 text-shadow-lg mr-6 rounded-[2px] hover:bg-text-green transition duration-300 hover:text-primary">Download CV</button>
              <button className="py-3 bg-text-green text-text-white border-[1px] border-text-green px-3 text-shadow-lg rounded-[2px] hover:bg-primary transition duration-300 hover:text-white hover:border-text-green hover:border-[1px]">Let's Talk</button>
            </div>

          </div>

          <div>
            <img className="hidden lg:block w-96 " src={logo} alt="Application Logo" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroSection