// "use client";
// import React from "react";
// import Image from 'next/image';
// import Typewriter from "typewriter-effect";
// import Link from "next/link";
// const Hero = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font bg-gray-100">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//               Hello I am
//               <Typewriter
//                 options={{
//                   strings: [
//                     "Kiran Mushtaque",
//                     "Web Developer",
//                     "Skilled in HTML, CSS & TypeScript",
//                     "Next.js Developer",
//                   ],

//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h1>
//             <div className="w-[100px] h-[2px] bg-blue-700"></div>
//             <p className="mb-6 text-lg sm:text-xl leading-relaxed">
//               A passionate Web Developer & Artificial Intelligence <br />{" "}
//               Enthusiast, building innovative solutions.
//             </p>
//             <p className="mb-6 text-lg sm:text-xl leading-relaxed">
//               I am continuously exploring new technologies and creating
//               impactful web applications.
//             </p>
//             <div className="flex justify-center">
//               <Link href={"#Contact"}>
//                 <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                   Contact
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//             <Image
//               className="object-cover object-center rounded"
//               alt="Web Developer & AI Enthusiast"
//               src="/images/2824139.jpg"
//               width={600}
//               height={80}
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;






















"use client";
import Typewriter from "typewriter-effect";

import Image from "next/image";
import react from "react";
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


