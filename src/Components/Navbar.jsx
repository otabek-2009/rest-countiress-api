import React, { useState } from 'react'

export default function Navbar({isDarkMode,setIsDarkMode}) {
 

  return (
    <header className='px-2 top-0 bg-white fixed w-full shadow-md sm:px-5 md:px-8 lg:px-16 flex dark:text-gray-100 bg-white dark:bg-gray-800 justify-between md:py-5 py-3'>
      <h1 className='text-3xl mx-16 font-semibold'>Where in the world</h1>
      {isDarkMode ? (
        <button onClick={() => setIsDarkMode(!isDarkMode)} className='bg-transparent shadow-sm text-xl font-semibold'>
          Light Mode
        </button>
      ) : (
        <button onClick={() => setIsDarkMode(!isDarkMode)} className='bg-transparent shadow-sm text-xl font-semibold'>
          Dark mode
        </button>
      )}
    </header>
  )
}
