'use client'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image'
import logo from "@/public/images/logo.webp"
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
                const dropdownRef = useRef<HTMLDivElement>(null);

                useEffect(() => {
                  function handleClickOutside(event: MouseEvent) {
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                      setOpen(false);
                    }
                  }
                  if (open) {
                    document.addEventListener('mousedown', handleClickOutside);
                  }
                  return () => {
                    document.removeEventListener('mousedown', handleClickOutside);
                  };
                }, [open]);
  return (
    <div>
      <nav className='flex justify-between items-center lg:p-10 lg:px-20'>
        <div className='flex items-center'>
            <Image className='w-10' src={logo} alt="Logo" />
            <h1 className='text-2xl font-semibold'>PaySlab</h1>
        </div>

        <ul className='flex flex-col lg:flex-row font-medium space-x-10 shadow-xs border border-gray-200 lg:p-3 lg:pt-5 lg:px-10 lg:rounded-full '>
          <li className="cursor-pointer">Personal</li>
          <li className="text-gray-300 cursor-pointer text-center">Business 
          <p className="text-[7px]">Coming soon!</p></li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Join waitlist</li>
        </ul>

        <div className='flex items-center gap-5'>
            <div>
                

                <div className="relative" ref={dropdownRef}>
                  <h1
                    className='flex items-center font-medium cursor-pointer select-none'
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    EN <MdOutlineKeyboardArrowDown className='text-xl font-medium'/>
                  </h1>
                  {open && (
                    <div className="absolute right-0 mt-2 w-fit  rounded-xl shadow z-10 bg-black px-2 py-3 text-white">
                      <ul className="">
                        <li className="px-4 py-2 hover:bg-gray-900 rounded-xl cursor-pointer">English</li>
                        <li className="px-4 py-2 hover:bg-gray-900 rounded-xl cursor-pointer">Español</li>
                        <li className="px-4 py-2 hover:bg-gray-900 rounded-xl cursor-pointer">Português</li>
                      </ul>
                    </div>
                  )}
                </div>
                
            </div>

            <div className='flex'>
                <button className='bg-black text-white text-sm rounded-l-full font-medium lg:py-4 lg:px-12 hover:bg-gray-300 hover:text-black'>Sign Up</button>
                <button className='bg-gray-300 text-black text-sm rounded-full font-medium lg:py-4 lg:px-7 relative lg:right-8 hover:bg-white'>Sign In</button>
            </div>
        </div>

      </nav>
    </div>
  )
}

export default Header
