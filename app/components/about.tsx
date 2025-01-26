

'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 py-10 ">
      <section className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 ">
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-2xl transition-transform transform hover:scale-105">
              <Image
                className="object-cover object-center"
                alt="picture"
                src="/images/picture.jpeg"
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-blue-800">About Me</h1>
            <p className="text-blue-700 mb-5">
              I am Kiran Mushtaque, a passionate Web Developer with expertise in HTML, CSS, and JavaScript. I love creating
              sleek, functional, and user-friendly web applications.
            </p>
            {expanded && (
              <p className="text-blue-700 mb-5">
                One of my proudest projects is an ATM I built using HTML, JavaScript, and CSS. I enjoy solving complex
                problems and am constantly learning new technologies to improve my skills. Stay tuned for more exciting
                projects!
              </p>
            )}
            <button
              onClick={toggleExpanded}
              className="inline-block mb-5 px-4 py-2 text-white bg-blue-600 rounded-lg transition-colors duration-300 hover:bg-blue-700 shadow-md"
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
            <div>
              <Link href="/CV/Resume.pdf">
                <button className="inline-block px-6 py-2 text-white bg-teal-600 rounded-lg transition-colors duration-300 hover:bg-teal-700 shadow-md">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
