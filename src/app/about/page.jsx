"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <motion.div 
    className="min-h-80 flex flex-col items-center overflow-hidden" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}
    >
        {/* Contenedor de la imagen y el texto */}
    <div className="h-full flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center">
        {/* Contenedor de la imagen */}
        <div className="sm:h-1/3 w-2/4 md:w-2/3 lg:w-full relative overflow-hidden">
          <Image src="/desk.png" alt="" width={500} height={500}/>
        </div>
        {/* Contenedor del texto */}
        <div className="h-1/3 md:w-1/2 mr-10 lg:w-1/2 flex flex-col items-center gap-4 mt-10">
          {/* Título */}
          <h1 className="font-bold text-2xl text-center">Biography</h1>
          {/* Descripción */}
          <p className="md:text-l w-full sm:w-auto ml-12 md:mr-15 lg:text-left lg:w-full">
            Lorem ipsum...sdfdsgdfgdfghdfhhdfhfdhfhfghgfjgjgj para que pueda sdfjsdfjdsgndgf 
          </p>
          {/* Quote */}
          <span className="italic ml-15">
            Lorem ipsummm más tierno
          </span>
        </div>
    </div>
    

            {/* Sección de Skills */}
            <div className="p-3 sm:p-6 md:p-8 lg:p-10 xl:p-15 flex flex-col gap-8 justify-center md:flex-col md:items-center mt-10">
                {/* Título de Skills */}
                <h1 className="font-bold text-2xl text-center">Skills</h1>
                {/* Lista de Skills */}
                <div className="flex gap-2 flex-wrap p-3 justify-center">
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                        JavaScript
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            React.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Next.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Express.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Node.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Tailwind CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            MongoDB
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            MySQL
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Git
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            GitHub
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Docker
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-50">
                            Postman
                        </div>
                    </div>
                </div>
        </motion.div>
    );
};

export default AboutPage;