"use clinent";
import {motion} from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div 
    className="h-full" 
    initial={{y: "-100vh"}} 
    animate={{y: "0%" }} 
    transition={{ duration: 0.6 }}
    >
        Contact
    </motion.div>
    );
}

export default ContactPage;