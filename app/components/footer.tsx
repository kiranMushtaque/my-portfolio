


import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin,  FaTwitter } from 'react-icons/fa'; // Importing additional social icons
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font py-12">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* Placeholder image, replace with your actual logo */}
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center mr-2">
            <span className="text-xl font-bold text-gray-700">K</span>
          </div>
          <span className="text-xl font-semibold">Kiran Portfolio</span>
        </Link>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Kiran Portfolio - All rights reserved.
        

        {/* Social Media Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
          <Link href="mailto:kiranmushtaque373@gmail.com" className="text-gray-500 hover:text-red-600 transition duration-300">
            <MdEmail className="text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/yourprofile" className="text-gray-500 hover:text-blue-600 transition duration-300">
            <FaLinkedin className="text-2xl" />
          </Link>
       
          <Link href="https://twitter.com/yourhandle" className="text-gray-500 hover:text-blue-400 transition duration-300">
            <FaTwitter className="text-2xl" />
          </Link>
        </span>
      </div>

      {/* Bottom Credits (Optional) */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Designed and Developed by Kiran
      </div>
    </footer>
  );
};

export default Footer;