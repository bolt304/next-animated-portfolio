"use client";
import Image from "next/image";
import {motion} from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}>

    {/* Hero div */}
    <div className="h-full flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 text-l">
    {/* Hero container - image */} 
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
       <Image src="/knight.png" alt="" fill className="object-contain"/>
      </div>
    {/* Texto */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
    {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold">From Historian to Full Stack Developer: My Web Journey</h1>
    {/* Descripción */}
      <p className="md:text-l">Portfolio dedicado a demostrar mis habilidades técnicas y creativas, mostrando proyectos personales y ejercicios prácticos que reflejan mi dedicación reciente por la programación y mi compromiso con el aprendizaje continuo en el campo del desarrollo web.</p>
    {/* Buttons */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-pink-300 bg-pink-300 text-black">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-pink-300 bg-pink-300 text-black">Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
