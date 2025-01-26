import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloudDownloadSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/images/Black And White Simple K For Business Or Identity Logo .png"
              alt="logo"
              width={50}
              height={50}
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/#"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-blue-600">
              projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-600">
              Contacts
            </Link>
          </nav>
          <a href="/CV/Resume.pdf">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <IoCloudDownloadSharp className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;






