"use client";
import { useState } from "react";
import Image from "next/image";
import { X, Menu, WholeWord, WholeWordIcon, Globe } from "lucide-react"; // for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#1d1d1d] text-[#c5bfbf]">
       
      <nav className="w-full px-6 lg:px-24 sm:px-8 md:px-12 py-6 lg:py-12">
        <div className="flex justify-between items-center  font-semibold">
          {/* Logo + Title */}
          <div className="flex space-x-2 items-center">
            <Image src="/logo.png" alt="logo" width={24} height={20} />
            <h1 className="text-sm">support@trackai</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden  md:flex justify-between font-sans text-lg space-x-6">
            <li className="cursor-pointer ">Currency .</li>
            <li className="cursor-pointer ">Data .</li>
            <li className="cursor-pointer ">Web App .</li>
            <li className="cursor-pointer ">Payment</li> 
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4 cursor-pointer">
            <span className="flex space-x-2 items-center ">
                
 <h1 className="hidden sm:block">En</h1>
 <Globe size={24} className="hidden sm:block" />
            </span>
           
            <h1 className="hidden sm:block">Login</h1>
            <button className="border border-[#787878] py-2 px-4 rounded-full cursor-pointer">
              Download
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden  text-[#5c5b52] font-bold"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 flex">
          <div className="w-64 bg-[#1d1d1d] shadow-xl p-6 space-y-6 relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-[#5c5b52]"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Sidebar Links */}
            <ul className="flex flex-col text-lg space-y-4 mt-12 text-[#817e73]">
               <li className="cursor-pointer ">Currency .</li>
            <li className="cursor-pointer ">Data .</li>
            <li className="cursor-pointer ">Web App .</li>
            <li className="cursor-pointer ">Payment</li> 
             <span className="flex space-x-2 items-center ">
 <h1 className="cursor-pointer">En</h1>
  <Globe size={24} />
            </span>
            <h1 className="cursor-pointer">Login</h1>
            </ul>
          </div>

          {/* Click outside closes sidebar */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
}
