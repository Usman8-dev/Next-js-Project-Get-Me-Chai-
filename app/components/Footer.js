import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-zinc-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-3xl">
                ☕
              </div>
              <h2 className="font-bold text-3xl tracking-tight">Get Me Chai</h2>
            </div>
            <p className="text-amber-400 text-sm mb-6">
              Chai that everyone loves ❤️
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the finest masala chai with love since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-amber-400">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-amber-400">Get in Touch</h3>
            <ul className="space-y-3 text-gray-300">
              <li>📍 123 Chai Street, Islamabad</li>
              <li>📞 +92 300 1234567</li>
              <li>✉️ hello@getmechai.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-amber-400">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get special offers and chai updates straight to your inbox.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-zinc-900 border border-zinc-700 rounded-l-full px-5 py-3 text-sm focus:outline-none focus:border-amber-500 w-full"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 rounded-r-full transition-all">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Get Me Chai. All Rights Reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

// import React from 'react'

// export default function Footer() {
//   return (
//     <footer className='bg-black text-white flex justify-center p-5'>
//         <p>Copyright &copy; All Rights Reserve!</p>

//     </footer>
//   )
// }
