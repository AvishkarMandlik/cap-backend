import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link} from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="College Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">College</span>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><Link to="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">Home</Link></li>
                        <li><Link to="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white">Services</Link></li>
            <li><Link to="/hallticket" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white">HallTicket</Link></li>
            <li><Link to="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white">Contact</Link></li>
            <li className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Dropdown
                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><Link to="/capdashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cap Dashboard</Link></li>
                    <li><Link to="/teacherdashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Teacher Dashboard</Link></li>
                    <li><Link to="/studentdashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Student Dashboard</Link></li>
                    <li>
                      <button onClick={() => setIsDoubleDropdownOpen(!isDoubleDropdownOpen)} className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dropdown
                        <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                      </button>
                      {isDoubleDropdownOpen && (
                        <div className="absolute left-full top-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</Link></li>
                            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My downloads</Link></li>
                            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Billing</Link></li>
                            <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rewards</Link></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li><Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link to="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"><SearchBar /></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
