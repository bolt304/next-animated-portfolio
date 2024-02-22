"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';

const ContactPage = () => {
    return (
        <motion.div 
    className="min-h-80 flex flex-col items-center overflow-hidden" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}
    >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
            {/* Text Container */}
            <div className="h-1/2 lg:h-full lg:w-1/2">
                <motion.div>
                    
                </motion.div>
            </div>
            {/* Form Container */}
            <form className="h-1/2 lg:h-full lg:w-1/2"></form>
        </div>
        <div className="sm:h-2/3 w-2/4 md:w-2/3 lg:w-full relative overflow-hidden">
          <Image src="/contact.png" alt="" width={400} height={400}/>
        </div>
    </motion.div>
    );
}

export default ContactPage;