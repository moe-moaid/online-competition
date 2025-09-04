// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function MovingDotPage() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-sans">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
//           Circular Motion Animation
//         </h1>
//         <p className="text-gray-400 mt-2">
//           Using Next.js, Tailwind CSS, and Framer Motion
//         </p>
//       </div>

//       {/* Main container for the circle animation */}
//       <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
//         {/* The visible circle border */}
//         <div className="absolute w-full h-full border-4 border-cyan-500/50 rounded-full"></div>

//         {/* Rotating container */}
//         <motion.div
//           className="absolute w-full h-full"
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 8,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {/* Arch positioned at the top of the circle */}
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
//             <svg width="120" height="120" viewBox="0 -10 120 120">
//               <path
//                 d="M 20 0 A 55 25 0 0 1 100 0"
//                 stroke="cyan"
//                 strokeWidth="3"
//                 fill="none"
//                 strokeLinecap="round"
//               ></path>
//             </svg>
//           </div>
//         </motion.div>
//       </div>

//       <div className="mt-10 text-center text-gray-400 max-w-lg">
//         <h2 className="text-xl font-semibold text-white mb-3">How It Works</h2>
//         <svg width="120" height="120" viewBox="0 0 120 120">
//           <path
//             d="M 20 60 A 50 50 0 0 1 100 60"
//             stroke="cyan"
//             strokeWidth="3"
//             fill="none"
//             strokeLinecap="round"
//           />
//         </svg>
//         <p>
//           The arch SVG is positioned at the top of the circle using absolute
//           positioning and transforms. The motion.div from Framer Motion provides
//           the smooth rotation animation, making the arch travel around the
//           circular path while maintaining its alignment.
//         </p>
//       </div>
//     </main>
//   );
// }

import React from "react";
import { Shield, Lock, HardDrive, CloudOff, FolderLock } from "lucide-react";

interface SecurityFeature {
  id: string;
  label: string;
  icon: React.ReactNode;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const SecurityDiagram: React.FC = () => {
  const securityFeatures: SecurityFeature[] = [
    {
      id: "secure",
      label: "Secure",
      icon: <FolderLock stroke="white" className="w-5 h-5" />,
      position: { top: "15%", left: "20%" },
    },
    {
      id: "no-cloud",
      label: "No cloud",
      icon: <CloudOff stroke="white" className="w-5 h-5" />,
      position: { top: "20%", right: "15%" },
    },
    {
      id: "aes-256",
      label: "AES-256",
      icon: <Lock stroke="white" className="w-5 h-5" />,
      position: { left: "10%", top: "50%" },
    },
    {
      id: "private",
      label: "Private",
      icon: <Shield stroke="white" className="w-5 h-5" />,
      position: { bottom: "25%", left: "25%" },
    },
    {
      id: "on-device",
      label: "On-Device",
      icon: <HardDrive stroke="white" className="w-5 h-5" />,
      position: { bottom: "20%", right: "20%" },
    },
  ];

  return (
    <main className="bg-white">
      <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />

        {/* Concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outermost circle */}
          <div className="absolute w-full h-full border border-[#d7d1ef] rounded-full animate-pulse-slow" />

          {/* Second circle */}
          <div
            className="absolute w-4/5 h-4/5 border border-[#d7d1ef] rounded-full animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Third circle */}
          <div
            className="absolute w-3/5 h-3/5 border border-[#d7d1ef] rounded-full animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />

          {/* Fourth circle */}
          <div
            className="absolute w-2/5 h-2/5 border border-[#d7d1ef] rounded-full animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Central logo/icon */}
        <div className="relative w-24 h-24 bg-card rounded-full flex items-center justify-center shadow-2xl border border-[#d7d1ef]">
          <div className="w-12 h-12 flex items-center justify-center">
            {/* Geometric S-shaped logo inspired by the original */}
            <div className="relative w-10 h-10 animate-spin-clockwise">
              <div className="absolute inset-0 bg-security-purple rounded-lg transform rotate-12 opacity-80" />
              <div className="absolute inset-0 bg-primary rounded-lg transform -rotate-12" />
              <div className="absolute inset-1 bg-security-glow rounded-md transform rotate-6 opacity-60" />
            </div>
          </div>
        </div>

        {/* Security features positioned around the circles */}
        {securityFeatures.map((feature, index) => (
          <div
            key={feature.id}
            className="absolute z-20 animate-bounce-slow"
            style={{
              ...feature.position,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div
              className="flex justify-between items-center gap-x-4 bg-feature-bg backdrop-blur-sm rounded-full ps-1 pe-2 py-1 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer group border border-gray-500/55"
              style={{
                boxShadow:
                  "0 0 10px rgba(107, 114, 128, 0.55), 0 0 20px rgba(107, 114, 128, 0.55)",
              }}
            >
              <div className="text-security-purple group-hover:scale-110 transition-transform duration-200 bg-gradient-to-r from-[#7d5fe9] to-[#e363c1] rounded-full p-2">
                {feature.icon}
              </div>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                {feature.label}
              </span>
            </div>
          </div>
        ))}

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30 rounded-full animate-pulse-slow" />
      </div>
      <div className="flex flex-row justify-between items-center w-full text-red">
        {securityFeatures.map((feat, index) => {
          return (
            
            <div
              key={index}
              className="relative 
                    w-[100px] h-[100px] 
                    flex items-center justify-center 
                    rounded-xl shadow-md
                    border-[4px] border-transparent
                    hover:[background:linear-gradient(white,white)_padding-box,conic-gradient(from_var(--border-angle),#fff,#e363c1_50%,#7d5fe9_100%)_border-box]
                    hover:animate-border-rotate
                "
            >
              <div className="">{feat.icon}</div>
              <p>{feat.label}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default SecurityDiagram;
