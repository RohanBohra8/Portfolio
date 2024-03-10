"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
  { url:"/", title:"Home"},
  { url:"/about", title:"About"},
  { url:"/portfolio", title:"Portfolio"},
  { url:"/contact", title:"Contact"},
];

const Navbar = () => {
  const [open,setOpen] = useState(false) // if next js we are using any hook then our component should be a client component ... so we need to add use client at very top
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* LOGO */}
        <div className=''>
            <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                <span className='text-white mr-1'>Rohan</span>
                <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>Bohra</span>
            </Link>
        </div>
        {/* Responsive menu (side bar wala three lines) */}
        <div className=''>
          {/* three line button */}
          <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>setOpen(!open)}>
          <div className='h-1 w-10 bg-white rounded'></div>
          <div className='h-1 w-10 bg-white rounded'></div>
          <div className='h-1 w-10 bg-white rounded'></div>
          </button> 
          {/* list will appear after clicking menu button */}
          {open && (
            <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
              {links.map(link => (
                <Link href={link.url} key={link.title}>{link.title}</Link>
              ))}
            </div>
          )}
        </div>
    </div>
    
  )
}

export default Navbar