"use client";
import {AnimatePresence} from 'framer-motion';
import Navbar from './navbar';

const TransitionProvider = ({children}) => {
    return (
        <AnimatePresence>
        <div className="w-screen h-screen bg-gradient-to-b from-purple-50 to-pink-200">
          <div className="h-24">
            <Navbar />
          </div>
            <div className="h-[calc(100vh-6rem)] ">{children}</div>
        </div>
        </AnimatePresence>
    );
}

export default TransitionProvider;