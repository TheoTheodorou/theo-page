import './Navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  const styles = {
    className:
      'block py-1 px-2 text-white rounded hover:bg-gray-100 hover:text-black',
    activeClassName: 'block py-1 px-2 text-white bg-blue-500 rounded ',
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
    <nav className="bg-gray-900 px-4 py-2.5 sticky w-full flex justify-center z-20 top-0 left-0 border-b border-gray-600">
      <ul className="flex flex-row py-1 justify-around  w-1/2">
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
    </nav>
  );
};

export default Navbar;
