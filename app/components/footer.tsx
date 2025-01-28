

import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font py-12">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center mr-2">
            <span className="text-xl font-bold text-gray-700">K</span>
          </div>
          <span className="text-xl font-semibold">Kiran Portfolio</span>
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 sm:mt-0  ">
          <Link
            href="mailto:kiranmushtaque373@gmail.com"
            className="text-gray-500 hover:text-red-600 hover:scale-110 transition transform duration-300"
          >
            <MdEmail className="text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yourprofile"
            className="text-gray-500 hover:text-blue-600 hover:scale-110 transition transform duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href="https://twitter.com/yourhandle"
            className="text-gray-500 hover:text-blue-400 hover:scale-110 transition transform duration-300"
          >
            <FaTwitter className="text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
