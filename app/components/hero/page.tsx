import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
    <div className='flex justify-center relative top-[100px] '>
       <div className='  w-[60vw] h-[60vh] space-y-14 '>
        <div className='flex justify-center'>
       <h1 className='font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#3179b8] to-[#3fa9f5] '>Welcome to Aura Mart</h1>
       </div>
       <div className='flex justify-center'>
        <p className='text-xl text-gray-700'>"Your ultimate destination for quality, curated finds. Shop smart. Live better."</p>
       </div>
       <div className='flex justify-center gap-x-9'>
        <Link href="/serverside" >
        <button className='w-36 h-12 font-bold bg-gradient-to-r from-[#3179b8] to-[#3fa9f5] text-white text-lg rounded-md  transition-all duration-300  hover:scale-110 hover:opacity-75'>Server Side</button>
      </Link>
        <Link href="/clientside">
        <button  className='w-36 h-12 font-bold bg-gradient-to-r from-[#3fa9f5] to-[#3179b8] text-white text-lg rounded-md transition-all duration-300  hover:scale-110 hover:opacity-75'> Client Side</button>
        </Link>
       </div>

        <div className='flex space-x-14 p-2'>
       <div className=' w-[50vw] h-[20vh] pl-6 space-y-3 rounded-md shadow-xl transition-all duration-300 hover:-translate-y-2'> 
       <div className='mt-4'>
        <Image src="/icons/defence.png" width={80} height={80} alt='' />
        <h1 className='font-semibold text-[28px]'>Secure Shopping</h1>
        <p className='font-sm text-[20px]'>Shop with confidence knowing your data is protected.</p>
        </div>
       </div>
       <div className=' w-[50vw] h-[20vh] pl-6   rounded-md shadow-xl transition-all duration-300 hover:-translate-y-2 '>  
         <div className='mt-4'>
        <Image src="/icons/headphones (1).png" width={80} height={70} alt='' />
        <h1 className='font-semibold text-[28px]'>24/7 Support</h1>
        <p className='font-sm text-[20px]'>Our customer service team is always here to help.</p></div>
        </div>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Hero
