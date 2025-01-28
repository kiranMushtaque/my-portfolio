import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 body-font py-12">
      <div className="container mx-auto px-5 py-8 flex flex-col sm:flex-row items-center">
        {/* Logo and Brand Name */}
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          aria-label="Go to Homepage"
        >
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center mr-2">
            <span className="text-xl font-bold text-gray-700">K</span>
          </div>
          <span className="text-xl font-semibold">Kiran Portfolio</span>
        </Link>

    
        <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full mt-4 sm:mt-0">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2">
            © {new Date().getFullYear()} Kiran Portfolio - All rights reserved.
          </p>

          <div className="inline-flex flex-wrap justify-center sm:justify-start space-x-4 mt-4 sm:mt-0">
            <Link
              href="mailto:kiranmushtaque373@gmail.com"
              className="text-gray-500 hover:text-red-600 hover:scale-110 transition transform duration-300"
              aria-label="Email Kiran"
            >
              <MdEmail className="text-2xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              className="text-gray-500 hover:text-blue-600 hover:scale-110 transition transform duration-300"
              aria-label="Kiran's LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link
              href="https://twitter.com/yourhandle"
              className="text-gray-500 hover:text-blue-400 hover:scale-110 transition transform duration-300"
              aria-label="Kiran's Twitter"
            >
              <FaTwitter className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>

   
      <div className="mt-8 text-center text-sm text-gray-500">
        Designed and Developed by Kiran
      </div>
    </footer>
  );
};

export default Footer;
