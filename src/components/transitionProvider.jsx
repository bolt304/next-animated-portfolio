"use client";
import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({children}) => {

    const pathName = usePathname();

    return (
        <AnimatePresence mode='wait'>
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-purple-50 to-pink-200">
            <motion.div 
            className="h-screen w-screen fixed bg-pink-300 rounded-b-[100px] z-40"
            animate={{height:"0vh"}} 
            exit={{height:"140vh"}}
            transition={{duration: 0.7, ease: "easeOut"}}
            />
            <motion.div 
            className="h-screen w-screen fixed bg-pink-300 rounded-t-[100px] bottom-0 z-40"
            initial={{height:"140vh"}} 
            animate={{height:"0vh", transition: {delay: 0.5}}}
            />
          <div className="h-24">
            <Navbar />
          </div>
            <div className="h-[calc(100vh-6rem)] ">{children}</div>
        </div>
        </AnimatePresence>
    );
}

export default TransitionProvider;