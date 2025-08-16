'use client'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import { TbLogin } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image'
import logo from "@/public/images/logo.webp"
import { useState, useRef, useEffect } from 'react';

const Header = () => {

  // FOR THE LANGUAGE DROPDOWN
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
      // FOR THE MOBILE AND SIGNIN MENU

      const [IsOpenedMenu, setIsOpenedMenu ] = useState(false)

      const handleIsOpenedMenu = () => {
        setIsOpenedMenu(!IsOpenedMenu)
      }

       const [IsOpenedAcc, setIsOpenedAcc ] = useState(false)

      const handleIsOpenedAcc = () => {
        setIsOpenedAcc(!IsOpenedAcc)
      }

  return (
    <div>

      {/* NAV BAR */}
      <nav className='flex justify-between items-center lg:p-10 lg:px-20 p-5'>
        
        {/* MOBILE MENU */}
        <div onClick={handleIsOpenedMenu} className="lg:hidden text-xl rounded-full p-3 bg-black text-white">
          {IsOpenedMenu ? <IoMdClose/> : <TbMenu/>}
        </div>

      {/* LOGO */}
        <div className='flex items-center'>
            <Image className='w-10' src={logo} alt="Logo" />
            <h1 className='text-2xl font-semibold'>PaySlab</h1>
        </div>

    {/* NAV NAVIGATION */}
        <ul className='hidden lg:flex flex-col lg:flex-row font-medium space-x-10 shadow-xs border border-gray-200 lg:p-3 lg:pt-5 lg:px-10 lg:rounded-full '>
          <li className="cursor-pointer">Personal</li>
          <li className="text-gray-300 cursor-pointer text-center">Business 
          <p className="text-[7px]">Coming soon!</p></li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Join waitlist</li>
        </ul>


        {/* BUTTONS AND LANGUAGE DROPDOWN */}

        <div className='flex items-center lg:gap-5 gap-2'>
            <div>
                

                <div className="relative" ref={dropdownRef}>
                  <h1
                    className='flex items-center font-medium cursor-pointer select-none'
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    EN <MdOutlineKeyboardArrowDown className='text-xl font-medium'/>
                  </h1>
                  {open && (
                    <div className="absolute right-0 lg:mt-2 mt-16 w-fit  rounded-xl shadow z-10 bg-black px-2 py-3 text-white">
                      <ul className="">
                        <li className="px-4 py-2 hover:bg-gray-900 rounded-xl cursor-pointer">English</li>
                        <li className="px-4 py-2 hover:bg-gray-900 rounded-xl cursor-pointer">Español</li>
                        <li className="px-4 py-2 hover:bg-gray-900 rounded-xl cursor-pointer">Português</li>
                      </ul>
                    </div>
                  )}
                </div>
                
            </div>

                {/* BUTTON */}
            <div className='hidden lg:flex'>
                <button className='bg-black text-white text-sm rounded-l-full font-medium lg:py-4 lg:px-12 hover:bg-gray-300 hover:text-black'>Sign Up</button>
                <button className='bg-gray-300 text-black text-sm rounded-full font-medium lg:py-4 lg:px-7 relative lg:right-8 hover:bg-white'>Sign In</button>
            </div>
              
              {/* MOBILE LOGIN  */}
            <div onClick={handleIsOpenedAcc} className='lg:hidden text-xl rounded-full p-3 bg-black text-white'>
                {IsOpenedAcc ? <IoMdClose/> : <TbLogin />}
                </div>
            
        </div>

      </nav>
    </div>
  )
}

export default Header
