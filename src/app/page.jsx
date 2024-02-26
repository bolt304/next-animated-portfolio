"use client";
import React from "react";
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}>

    {/* Hero div */}
    <div className="h-full flex flex-col lg:flex-row p-4 sm:p-8 md:p-10 lg:p-20 xl:p-30 text-l">
    {/* Hero container - image */} 
      <div className="h-1/2 md:h-2/3 lg:h-full lg:w-1/2 relative">
       <Image src="/knight.png" alt="" fill className="object-contain"/>
      </div>
    {/* Texto */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 mr-2 ml-4 items-center justify-center">
    {/* Title */}
      <h1 className="text-xl md:text-xl font-semibold">From Historian to Full Stack Developer: My Web Journey</h1>
    {/* Descripción */}
      <p className="md:text-l font-medium">A portfolio showcasing my technical and creative skills, featuring personal projects and practical exercises that reflect my recent dedication to programming and commitment to continuous learning in the field of web development.</p>
    {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/projects">
          <button className="p-2 rounded-md bg-pink-300 hover:bg-pink-400 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300  text-black font-medium tracking-tighter">View my work</button>
          </Link>
          <Link href="/contact">
          <button className="p-2 rounded-md bg-pink-300 hover:bg-pink-400 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300  text-black font-medium tracking-tighter">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
