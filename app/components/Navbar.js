import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-amber-900 via-black to-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center text-2xl">
            ☕
          </div>
          <div>
            <h1 className="font-bold text-3xl tracking-tight">Get Me Chai</h1>
            <p className="text-amber-400 text-xs -mt-1">Chai that everyone loves</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg">
          <li className="hover:text-amber-400 transition-colors cursor-pointer font-medium"> 
            <a href="/">Home</a></li>
          <li className="hover:text-amber-400 transition-colors cursor-pointer font-medium">Menu</li>
          <li className="hover:text-amber-400 transition-colors cursor-pointer font-medium">About</li>
          <li className="hover:text-amber-400 transition-colors cursor-pointer font-medium">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105">
            Order Now
          </button>
          
          <Link href= {'/login'}> 
          <button className="px-6 py-2.5 border border-white/70 hover:border-white hover:bg-white/10 font-medium rounded-full transition-all duration-300">
            Login
          </button></Link>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-3xl">
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
}

// import React from 'react'

// export default function Navbar() {
//   return (
//     <div className='bg-black text-white flex justify-between p-5'>
//         <div className="logo font-bold text-2xl">Get Me Chai</div>
//         <ul className='flex justify-around gap-16'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Login</li>
//         </ul>
//     </div>
//   )
// }
