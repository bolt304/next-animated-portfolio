"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';

const ContactPage = () => {
    return (
        <motion.div 
    className="h-full" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}
    >
        <div className="sm:h-2/3 w-2/4 md:w-2/3 lg:w-full relative overflow-hidden">
          <Image src="/contact.png" alt="" width={400} height={400}/>
        </div>
    </motion.div>
    );
}

export default ContactPage;