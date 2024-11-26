// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3 md:px-6">
//         {/* Logo dan Menu Utama */}
//         <div className="flex items-center space-x-4">
//           <a to="/" className="flex items-center">
//             <img
//               src="https://www.tadl.org/sites/default/files/styles/blog_featured/public/2023-10/familysearch.png?itok=K0NIjy4n"
//               className="h-8"
//               alt="Logo"
//             />
//             <span className="ml-2 text-lg font-bold text-gray-800">
//               FamilySearch
//             </span>
//           </a>

//           {/* Menu Navigasi (Desktop) */}
//           <nav className="hidden md:flex space-x-6">
//             <a to="/" className="text-gray-600 hover:text-blue-600">
//               Home
//             </a>
//             <a href="/about" className="text-gray-600 hover:text-blue-600">
//               About
//             </a>
//             <a to="/services" className="text-gray-600 hover:text-blue-600">
//               Services
//             </a>
//             <a to="/contact" className="text-gray-600 hover:text-blue-600">
//               Contact
//             </a>
//           </nav>
//         </div>

//         {/* Tombol Aksi (Desktop) */}
//         <div className="hidden md:flex items-center space-x-4">
//           <a
//             to="/sign-in"
//             className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition"
//           >
//             SIGN IN
//           </a>
//           <a
//             to="/create-account"
//             className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
//           >
//             CREATE ACCOUNT
//           </a>
//         </div>

//         {/* Tombol Hamburger (Mobile) */}
//         <button
//           className="md:hidden text-gray-800 focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Dropdown Menu untuk Mobile */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
//           <nav className="flex flex-col space-y-2 p-4">
//             <Link
//               to="/"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/sign-in"
//               className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition"
//             >
//               SIGN IN
//             </Link>
//             <Link
//               to="/create-account"
//               className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
//             >
//               CREATE ACCOUNT
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;
