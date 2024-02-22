"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <motion.div 
    className="h-full" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}
    >
         {/* Sección de la Imagen */}
         <div className="relative flex justify-center items-center">
                <div style={{ maxWidth: '50%' }}>
                    <Image 
                        src="/desk.png" 
                        alt="" 
                        layout="responsive" 
                        width={1200} 
                        height={800} 
                        className="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
                    />
                </div>
            </div>

            {/* Sección de la Biografía */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-12 justify-center md:flex-row md:justify-start md:items-center z-20">
                {/* Contenedor de la Biografía */}
                <div className="md:w-2/3 md:ml-8">
                    {/* Título de la Biografía */}
                    <h1 className="font-bold text-2xl">
                        Biography
                    </h1>
                    {/* Descripción de la Biografía */}
                    <p className="text-lg">
                        Lorem ipsum...
                    </p>
                    {/* Quote de la Biografía */}
                    <span className="italic">
                        Lorem ipsummm más tierno
                    </span>
                </div>
            </div>

            {/* Sección de Skills */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-12 justify-center">
                {/* Título de Skills */}
                <h1 className="font-bold text-2xl">Skills</h1>
                {/* Lista de Skills */}
                <div className="flex gap-2 flex-wrap">
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