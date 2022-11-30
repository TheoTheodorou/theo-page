import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const styles = {
    className:
      'link block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700',
    activeClassName:
      'active block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white',
  };

  const links = [
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/',
      name: 'Home',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/about',
      name: 'About',
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/work',
      name: 'Work',
    },
  ];

  return (
    <nav className="nav-body bg-gray-900 px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="nav-logo text-white text-xl">Theo Theodorou</div>
        <div className="nav-links items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? link.activeClassName : link.className
                }
                to={link.to}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
