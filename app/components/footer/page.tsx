import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
      <div className='bg-gray-700 w-[100vw] h-[17vh] relative top-[177px]'>
      <div className=' flex justify-center '>
          <div className='w-[80vw] h-[10vh] flex justify-between '>
         <div className='pl-3 relative top-4'>
             <h1 className='font-bold text-[28px]'>Aura Mart</h1>
             <p className='text-black'> Why shop ordinary when you can shop extraordinary? Step into Aura Mart today!</p>
             </div>
         <div className='flex items-center space-x-3'> 
            <Image className='w-[40px] h-[40px]' src="/icons/facebook.png" width={100} height={100} alt='' />
            <Image className='w-[40px] h-[40px]' src="/icons/instagram.png" width={100} height={100} alt='' />
            <Image className='w-[40px] h-[40px]' src="/icons/twitter.png" width={100} height={100} alt='' />
         </div>
          </div>
         
            
      </div>
      <div className='flex justify-center items-center h-[50px]'>
            <div>
                <p className='font-bold text-[18px]'>© 2023 BT Store. All rights reserved.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
