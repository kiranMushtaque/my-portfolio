

'use client'

import { useState, useEffect } from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs 
} from "react-icons/si";
import { IconType } from "react-icons"; // Import IconType

const skillsData = [
  { 
    name: "HTML", 
    icon: SiHtml5, 
    percentage: 100, 
    gradientFrom: "from-orange-400",
    gradientTo: "to-orange-600",
    shadowColor: "shadow-orange-200"
  },
  { 
    name: "CSS", 
    icon: SiCss3, 
    percentage: 80, 
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
    shadowColor: "shadow-blue-200"
  },
  { 
    name: "JavaScript", 
    icon: SiJavascript, 
    percentage: 50, 
    gradientFrom: "from-yellow-400",
    gradientTo: "to-yellow-500",
    shadowColor: "shadow-yellow-200"
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    percentage: 80, 
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700",
    shadowColor: "shadow-blue-200"
  },
  { 
    name: "Next JS", 
    icon: SiNextdotjs, 
    percentage: 80, 
    gradientFrom: "from-gray-600",
    gradientTo: "to-gray-800",
    shadowColor: "shadow-gray-200"
  }
];

const SkillCard: React.FC<{
  name: string;
  Icon: IconType; // Use IconType for the icon prop
  percentage: number;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
}> = ({ name, Icon, percentage, gradientFrom, gradientTo, shadowColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="p-4 w-full md:w-1/3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative rounded-2xl p-6 transition-all duration-300 ease-in-out ${shadowColor} shadow-lg ${isHovered ? 'transform -translate-y-2' : ''} bg-white border border-gray-100`}>
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
            <Icon className="text-2xl" />
          </div>
          <h2 className="ml-4 text-xl font-bold text-gray-800">
            {name}
          </h2>
        </div>
        
        <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`absolute h-full rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} transition-all duration-1000 ease-out ${showProgress ? '' : 'w-0'}`}
            style={{ 
              width: showProgress ? `${percentage}%` : '0%',
            }}
          />
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className={`text-sm font-bold ${isHovered ? `text-gradient bg-gradient-to-r ${gradientFrom} ${gradientTo}` : 'text-gray-800'}`}>
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">
            Professional Skills
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Technical Expertise
          </h1>
          <div className="mt-4 w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="flex flex-wrap -m-4">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              name={skill.name}
              Icon={skill.icon}
              percentage={skill.percentage}
              gradientFrom={skill.gradientFrom}
              gradientTo={skill.gradientTo}
              shadowColor={skill.shadowColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;









