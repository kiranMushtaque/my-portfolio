





"use client";
import Typewriter from "typewriter-effect";

import Image from "next/image";

import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-white to-sky-100 py-10">
      <section className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
            Hello, I am
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-transparent bg-clip-text">
              <Typewriter
                options={{
                  strings: [
                    "Kiran Mushtaque",
                    "Web Developer",
                    "TypeScript & Next.js",
                    "AI Enthusiast"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            A passionate developer creating impactful web experiences and continuously exploring new technologies.
          </p>
          <div className="flex gap-4">
            <Link href="#Contact">
              <button className="px-5 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300">
                Contact
              </button>
            </Link>
            <Link href="#Projects">
              <button className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                My Projects
              </button>
            </Link>
          </div>
        </div>
        {/* Image Content */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/2824139.jpg"
              alt="Web Developer & AI Enthusiast"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}


