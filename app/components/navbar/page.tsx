import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[70%] h-[60px] flex items-center">
          <div className="w-full flex justify-between items-center">
            
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3179b8] to-[#3fa9f5] text-[24px] md:text-[28px]">
              Aura Mart
            </span>

            <ul className="flex list-none gap-4 md:gap-6 text-[16px] md:text-[20px] text-gray-700 font-semibold">
              <li className="hover:text-blue-600 transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <Link href="/serverside">Server Side</Link>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <Link href="/clientside">Client Side</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;