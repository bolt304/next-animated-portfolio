"use client";
import {motion} from 'framer-motion';
import { MdCastle } from "react-icons/md";
import { GiMountedKnight } from "react-icons/gi";
import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const ContactPage = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Say:Hello!"
    const text2 = "Whether you have a question about my work, want to collaborate on a project, or just want to say hi, my inbox is open :)"

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        },
      );
  };

    return (
        <motion.div 
            className="h-full flex flex-col items-center overflow-hidden" 
            initial={{y: "-100vh"}} 
            animate={{y: "0%" }} 
            transition={{ duration: 0.6 }}
            >
                <div className="h-1/2 lg:h-full lg:w-1/2 md:h-full md:w-1/2 flex flex-col gap-10 mr-2 ml-4 justify-center items-center">
                    <motion.div className="text-center text-4xl">
                        <div className="flex items-center tracking-wide">
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <div className="flex items-center tracking-wide text-5xl ml-5">
                                <GiMountedKnight />
                                <MdCastle />
                            </div>
                        </div>
                    </motion.div>
                    <p className="w-80 h-24 lg:text-lg md:text-md font-medium text-center">{text2}</p>
                    <form 
                    onSubmit={sendEmail} 
                    ref={form} 
                    className="flex flex-col gap-4 justify-center w-full max-w-md mx-auto lg:w-full">
                        <textarea rows={4} 
                        className="bg-transparent border-b-2 border-gray-700 outline-none resize-none" 
                        name="user_message" 
                        placeholder="Your message" required />
                        <input type="email"
                        className="bg-transparent border-b-2 border-gray-700 outline-none" 
                        name="user_email" 
                        placeholder="Your email address:" required />
                        <button className="p-2 rounded-lg bg-pink-300 hover:bg-pink-400 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300 text-black font-medium tracking-wide" 
                        type="submit">Send</button>
                        {success && <span className="text-green-600 text-center">Message sent successfully!</span>}
                        {error && <span className="text-red-500 text-center">Message failed to send</span>}
                    </form>
            </div>
            <div className="absolute left-8 bottom-10">
                <Image src="/contact.png" alt="Background" width={250} height={250} />
            </div>
        </motion.div>
    
    );
}

export default ContactPage;