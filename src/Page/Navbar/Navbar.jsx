import { Avatar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container  z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center'>

    <p className='font-bold text-lg '>Task Manager</p>
      <div className='flex  items-center gap-5'>
        <p>codewithzosh</p>
        <Avatar src='https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg'>C</Avatar>
      </div>

    </div>
  )
}

export default Navbar
