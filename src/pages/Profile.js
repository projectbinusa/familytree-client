// import React from "react";

// function Profile() {
//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
//       <button
//         data-popover-target="popover-company-profile"
//         type="button"
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         Company profile
//       </button>

//       <div
//         data-popover
//         id="popover-company-profile"
//         role="tooltip"
//         className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-80 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
//       >
//         <div className="p-3">
//           <div className="flex">
//             <div className="me-3 shrink-0">
//               <a
//                 href="#"
//                 className="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700"
//               >
//                 <img
//                   className="w-8 h-8 rounded-full"
//                   src="https://flowbite.com/docs/images/logo.svg"
//                   alt="Flowbite logo"
//                 />
//               </a>
//             </div>
//             <div>
//               <p className="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">
//                 <a href="#" className="hover:underline">
//                   Flowbite
//                 </a>
//               </p>
//               <p className="mb-3 text-sm font-normal">Tech company</p>
//               <p className="mb-4 text-sm">
//                 Open-source library of Tailwind CSS components and Figma design
//                 system.
//               </p>
//               <ul className="text-sm">
//                 <li className="flex items-center mb-2">
//                   <span className="me-2 font-semibold text-gray-400">
//                     <svg
//                       className="w-3.5 h-3.5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 21 20"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                       />
//                     </svg>
//                   </span>
//                   <a
//                     href="#"
//                     className="text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     https://flowbite.com/
//                   </a>
//                 </li>
//                 <li className="flex items-start mb-2">
//                   <span className="me-2 font-semibold text-gray-400">
//                     <svg
//                       className="w-3.5 h-3.5"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 20 18"
//                     >
//                       <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
//                     </svg>
//                   </span>
//                   <span className="-mt-1">
//                     4,567,346 people like this including 5 of your friends
//                   </span>
//                 </li>
//               </ul>
//               <div className="flex mb-3 -space-x-3 rtl:space-x-reverse">
//                 <img
//                   className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
//                   src="/docs/images/people/profile-picture-5.jpg"
//                   alt=""
//                 />
//                 <img
//                   className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
//                   src="/docs/images/people/profile-picture-2.jpg"
//                   alt=""
//                 />
//                 <img
//                   className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
//                   src="/docs/images/people/profile-picture-3.jpg"
//                   alt=""
//                 />
//                 <a
//                   className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-400 border-2 border-white rounded-full hover:bg-gray-500 dark:border-gray-800"
//                   href="#"
//                 >
//                   +3
//                 </a>
//               </div>
//               <div className="flex">
//                 <button
//                   type="button"
//                   className="inline-flex items-center justify-center w-full px-5 py-2 me-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Like page
//                 </button>
//                 <button
//                   id="dropdown-button"
//                   data-dropdown-toggle="dropdown-menu"
//                   data-dropdown-placement="right"
//                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//                   type="button"
//                 >
//                   <svg
//                     className="w-3.5 h-3.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 16 3"
//                   >
//                     <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
//                   </svg>
//                 </button>
//               </div>
//               <div
//                 id="dropdown-menu"
//                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="dropdown-button"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Report this page
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Add to favorites
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Block this page
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Invite users
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div data-popper-arrow></div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
