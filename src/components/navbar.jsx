import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* LOGO */}
        <div className=''>
            <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                <span className='text-white mr-1'>Rohan</span>
                <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>Bohra</span>
            </Link>
        </div>
        <div>2</div>
    </div>
    
  )
}

export default Navbar