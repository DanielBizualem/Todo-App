import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-around border-b border-gray-300 py-5'>
        <div className='flex gap-3'>
          <h1 className='text-xl font-semibold italic'>ToDo <span className='text-blue-500 italic'>App</span></h1>
        </div>
        <ul className='flex gap-[40px] text-md'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar