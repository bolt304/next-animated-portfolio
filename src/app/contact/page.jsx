"use client";
import {motion} from 'framer-motion';
import Image from 'next/image';
import { MdCastle } from "react-icons/md";
import { GiMountedKnight } from "react-icons/gi";
import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Say:Hello!"
    const text2 = "Whether you have a question about my work, want to collaborate on a project, or just want to say hi, my inbox is always open :)"

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
            className="min-h-80 flex flex-col items-center overflow-hidden" 
            initial={{y: "-100vh"}} 
            animate={{y: "0%" }} 
            transition={{ duration: 0.6 }}
            >
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
                <div className="sm:h-1/3 w-full md:w-1/2 lg:w-1/2 relative overflow-hidden mb-8 lg:mb-0 p-20">
                    <Image src="/contact.png" alt="" width={400} height={400}/>
                </div>
        
            {/* Text Contain + Form*/}
                <div className="h-auto sm:1/3 md:h-full lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
            {/* Text */}
            <motion.div className="text-center text-4xl mt-10 sm:px-20">
                <div className="flex items-center tracking-wide p-10 mb-5 mt-8 md:mt-0">
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
                        <div className="flex items-center tracking-wide text-5xl">
                            <GiMountedKnight />
                            <MdCastle />
                        </div>
                </div>
            </motion.div>
            
            {/* Form */}
                <form
                    onSubmit={sendEmail}
                    ref={form} 
                    className="bg-blue-50 round-xl text-l flex flex-col gap-6 justify-center p-6 sm:p-10 mt-8 w-full font-sans font-medium"
                    >
                    <span>Leave your message:</span>
                    <textarea 
                        rows={4}
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none" 
                        name="user_message" 
                    />
                    <span>Your email address is:</span>
                    <input 
                        name="user_email" 
                        type="text" 
                        className="bg-transparent border-b-2 border-b-black outline-none"
                    />
                    <p className='font-semibold font-mono'>{text2}</p>
                    <button className="p-2 rounded-lg bg-pink-300 hover:bg-pink-400 active:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300 text-black font-medium tracking-tighter"
                    type="submit">Send</button>
                    {success && <span className="text-green-600">Message sent successfully!</span>}
                    {error && <span className="text-red-500">Message failed to send</span>}
                </form>
            </div>
        </div>
    </motion.div>
    );
}

export default ContactPage;