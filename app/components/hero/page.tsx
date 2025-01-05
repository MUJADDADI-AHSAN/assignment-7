import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className="flex justify-center relative top-[100px]">
      <div className="w-[90vw] lg:w-[60vw] h-auto space-y-14">
       
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#3179b8] to-[#3fa9f5] text-center">
            Welcome to Aura Mart
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-lg lg:text-xl text-gray-700 text-center">
            "Your ultimate destination for quality, curated finds. Shop smart. Live better."
          </p>
        </div>

        
        <div className="flex justify-center gap-x-6 lg:gap-x-9">
          <Link href="/serverside">
            <button className="w-32 lg:w-36 h-12 font-bold bg-gradient-to-r from-[#3179b8] to-[#3fa9f5] text-white text-sm lg:text-lg rounded-md transition-all duration-300 hover:scale-110 hover:opacity-75">
              Server Side
            </button>
          </Link>
          <Link href="/clientside">
            <button className="w-32 lg:w-36 h-12 font-bold bg-gradient-to-r from-[#3fa9f5] to-[#3179b8] text-white text-sm lg:text-lg rounded-md transition-all duration-300 hover:scale-110 hover:opacity-75">
              Client Side
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-14 gap-y-6 p-2">
         
          <div className="w-full lg:w-[45%] h-auto p-6 space-y-3 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center space-x-4">
              <Image src="/icons/defence.png" width={80} height={80} alt="Secure Shopping" />
              <h1 className="font-semibold text-[24px] lg:text-[28px]">Secure Shopping</h1>
            </div>
            <p className="text-sm lg:text-[20px] text-gray-600">
              Shop with confidence knowing your data is protected.
            </p>
          </div>

        
          <div className="w-full lg:w-[45%] h-auto p-6 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-center space-x-4">
              <Image src="/icons/headphones (1).png" width={80} height={70} alt="24/7 Support" />
              <h1 className="font-semibold text-[24px] lg:text-[28px]">24/7 Support</h1>
            </div>
            <p className="text-sm lg:text-[20px] text-gray-600">
              Our customer service team is always here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;