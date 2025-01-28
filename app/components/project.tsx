


'use client'
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Calculator",
      category: "tools",
      description: "A sleek and efficient calculator built with HTML, JavaScript, and CSS.",
      imageUrl: "/images/calutaor.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 2,
      title: "Currency Converter",
      category: "tools",
      description: "A currency converter project using HTML, JavaScript, and CSS.",
      imageUrl: "/images/curency convertor.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 3,
      title: "Word Counter",
      category: "tools",
      description: "A word counter tool created with HTML, JavaScript, and CSS.",
      imageUrl: "/images/word countor.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 4,
      title: "Number Guessing Game",
      category: "games",
      description: "A number guessing game built using HTML, JavaScript, and CSS.",
      imageUrl: "/images/number gussing game.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 5,
      title: "Todo App",
      category: "productivity",
      description: "A functional and sleek Todo application using HTML, JavaScript, and CSS.",
      imageUrl: "/images/todo.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 6,
      title: "Quiz App",
      category: "games",
      description: "A quiz application built with HTML, JavaScript, and CSS.",
      imageUrl: "/images/quiz.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 7,
      title: "ATM Simulator",
      category: "tools",
      description: "An ATM simulator created using HTML, JavaScript, and CSS.",
      imageUrl: "/images/atm.PNG", 
      link: "https://quick-calc-gold.vercel.app/",
    },
    {
      id: 8,
      title: "Foodtuck",
      category: "web",
      description: "An e-commerce website for food lovers.",
      imageUrl: "/images/project9.PNG", 
      link: "https://hackathon-day-4.vercel.app/",
    },
    {
      id: 9,
      title: "King Burger",
      category: "web",
      description: "A modern e-commerce website.",
      imageUrl: "/images/project8.PNG", 
      link: "https://milestone-3-e-commerce-website-project.vercel.app/",
    },
    {
      id: 10,
      title: "Blog Website",
      category: "web",
      description: "A dynamic blog with Next.js.",
      imageUrl: "/images/project7.PNG", 
      link: "https://milestone3-nextjs-blog.vercel.app/",
    },
  ], []);

  const categories = ["all", "tools", "web", "productivity", "games"];  

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            <span className="text-shadow-glow">Project Showcase</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore a collection of my projects, showcasing my skills and creativity.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                    : "bg-gray-800/40 text-gray-400 hover:bg-gray-700/60 hover:text-gray-300 backdrop-blur-sm border border-gray-700/30"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group relative bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
              style={{ objectFit: 'cover' }}
                  className="rounded-t-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 relative z-10">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>
                <Link href={project.link} passHref>
                  <span className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link">
                    <span className="mr-2 font-medium">View Project</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectGallery;
