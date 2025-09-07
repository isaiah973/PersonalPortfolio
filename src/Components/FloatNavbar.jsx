import React from "react"
import { AiFillHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { FaAward } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
const FloatNavbar = () => {
  return (
    <div>
      <div className="fixed bottom-[5vh] left-0 right-0 m-auto flex items-center justify-center h-[10vh] px-4 bg-primary border-[2px] border-teal-800 hover:border-teal-800 hover:bg-primary transition duration-300 rounded-[50px] opacity-75 w-[fit-content]">
        
        <div className="h-[50px] w-[50px] flex items-center justify-center hover:bg-black transition duration-300 rounded-[50%]"><AiFillHome className="text-2xl text-gray-400"/></div>

        <div className="h-[50px] w-[50px] flex items-center justify-center hover:bg-black rounded-[50%] transition duration-300"><IoPerson className="text-2xl text-gray-400"/></div>

        <div className="h-[50px] w-[50px] flex items-center justify-center hover:bg-black rounded-[50%] transition duration-300"><TiContacts className="text-2xl text-gray-400"/></div>

        <div className="h-[50px] w-[50px] flex items-center justify-center hover:bg-black rounded-[50%] transition duration-300"><FaAward className="text-2xl text-gray-400"/></div>

        <div className="h-[50px] w-[50px] flex items-center justify-center hover:bg-black rounded-[50%] transition duration-300"><FaFileAlt className="text-2xl text-gray-400"/></div>
      </div>
    </div>
  )
}

export default FloatNavbar
