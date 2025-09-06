import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="">
      <nav className="z-[100] font-Rubik gap-40 text-black flex items-center justify-between absolute w-full bg-primary h-[7vh] font-medium px-64">
        <Link>
          <div className="text-2xl ">
           <p className="hover:border-b-4 hover:border-b-primary-teal cursor-pointer text-white">Adeola</p>
        </div>
        </Link>

        <div className="flex gap-16 ">
          <Link>
            <p className="cursor-[pointer] hover:border-b-4 hover:border-b-primary-teal text-white">Portfolio</p>
          </Link>

          <Link>
            <p className="cursor-[pointer] hover:border-b-4 hover:border-b-primary-teal text-white">Skils</p>
          </Link>

          <Link>
            <p className="cursor-[pointer] hover:border-b-4 hover:border-b-primary-teal text-white">Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
