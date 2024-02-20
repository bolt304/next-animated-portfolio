"use client";
import {motion} from 'framer-motion';

const AboutPage = () => {
    return (
        <motion.div 
    className="h-full" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}
    >
        {/* Container */}
        <div className="">
            {/* Text Container */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                {/* Biography Container*/}
                <div className="flex flex-col gap-12 justify-center">
                    {/* Biography Title*/}
                    <h1 className="font-bold text-2xl">
                        Biography
                    </h1>
                    {/* Bio Description*/}
                    <p className="text-lg">
                        Lorem ipsum...
                    </p>
                    {/* Quote */}
                    <span className="italic">
                        Lorem ipsummm más tierno
                    </span>
                    {/* Biography Signature */}
                    <div className=""></div>
                    {/* Biography Scroll SVG en caso de querer meterlo */}
                    {/* Skills */}
                    <div className="flex flex-col gap-12 justify-center">
                    {/* Skills Title */}
                    <h1 className="font-bold text-2xl">Skills</h1>
                    {/* Skills List */}
                    <div className="flex gap-2 flex-wrap">
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            JavaScript
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            React.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Next.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Express.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Node.js
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Tailwind CSS
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            MongoDB
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            MySQL
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Git
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            GitHub
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Docker
                        </div>
                        <div className="rounded p-2 text-sm cursor-progress bg-neutral-800 text-pink-300">
                            Postman
                        </div>
                    </div>
                    {/* Skills Scroll SVG*/}
                    </div>
                        {/* Experience */}
                        <div className=''>Experience</div>
                </div>
            </div>
            {/* SVG Container */}
            <div className="hidden"></div>
        </div>
    </motion.div>
    );
};

export default AboutPage;