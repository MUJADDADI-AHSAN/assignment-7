import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-700 w-full relative top-[177px] text-white">
     
      <div className="flex justify-center py-6">
        <div className="w-[90vw] lg:w-[80vw] flex flex-col lg:flex-row justify-between items-center">
         
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h1 className="font-bold text-2xl lg:text-[28px]">Aura Mart</h1>
            <p className="text-gray-300 text-sm lg:text-base">
              Why shop ordinary when you can shop extraordinary? Step into Aura Mart today!
            </p>
          </div>
         
          <div className="flex items-center space-x-4">
            <Image
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
              src="/icons/facebook.png"
              width={32}
              height={32}
              alt="Facebook"
            />
            <Image
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
              src="/icons/instagram.png"
              width={32}
              height={32}
              alt="Instagram"
            />
            <Image
              className="w-8 h-8 transition-transform duration-300 hover:scale-110"
              src="/icons/twitter.png"
              width={32}
              height={32}
              alt="Twitter"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-2">
        <div className="flex justify-center">
          <p className="text-center text-sm lg:text-base font-bold">
            © 2023 Aura Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
