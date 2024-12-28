import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Kaplong Hospital, a cornerstone of healthcare, has served its community with dedication since its founding. Renowned for its compassionate care and advanced medical services, it continues to be a beacon of hope and healing.
          </p>
        </div>

        {/* Center section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/doctors'>ALL DOCTORS</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>
              <a href="tel:+254727318468">254727318468</a>
            </li>
            <li>
              <a href="mailto:kenkilachei@gmail.com">kenkilachei@gmail.com</a>
            </li>
          </ul>

        </div>
      </div>

      {/* Copyright text */}
      <div>
        <hr />
        <p className='py-5 text-small text-center'>
          Copyright © 2024 kilachei - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer
