import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
    <div className='flex justify-center'>
      <div className='w-[70%] h-[60px] flex justify-center  '> 
        <div className=' w-[97%] flex justify-between items-center'>
         <span className=' font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3179b8] to-[#3fa9f5] text-[28px]'>Aura Mart</span>
         <div className='flex list-none gap-6 text-[20px] text-gray-700 font-semibold'>
            <li>Home</li>
            <Link href="/serverside" ><li>Server Side</li> </Link>
            <Link href="/clientside" ><li>Client Side</li> </Link>
         </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
