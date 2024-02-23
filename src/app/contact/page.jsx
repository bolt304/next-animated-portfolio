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
        <div className="sm:h-2/3 w-2/4 md:w-2/3 lg:w-full relative overflow-hidden">
          <Image src="/contact.png" alt="" width={400} height={400}/>
        </div>
            {/* Text Container */}
            <div className="h-2/3 md:h-full lg:h-full lg:w-2/3 flex flex-col items-center justify-center">
                <motion.div classname="text-center">
                    <div className="flex items-center tracking-wide">
                            {text.split("").map((letter, index) => (
                                <motion.span key={index} 
                                initial={{opacity:1}} 
                                animate={{opacity:0}} 
                                transition={{
                                    duration: 3, 
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }} 
                                >
                            {letter}
                            </motion.span>
                        ))}
                            <div className="flex items-center tracking-wide">
                                <GiMountedKnight />
                                <MdCastle />
                            </div>
                    </div>
                </motion.div>
            </div>
            {/* Form Container */}
            <form
            onSubmit={sendEmail}
            ref={form} 
            className="h-2/3 lg:h-full lg:w-2/3 bg-blue-50 round-xl text-l flex flex-col gap-6 justify-center p-10">
                <span>Leave your message:</span>
                <texarea 
                rows={6}
                className="bg-transparent border-b-2 border-b-black outline-none resize-none" 
                name="user_message" 
                />
                <span>My email address is:</span>
                <input 
                name="user_email" 
                type="text" 
                className="bg-transparent border-b-2 border-b-black outline-none"
                />
                <p className='font-semibold font-mono'>{text2}</p>
                <button classname="bg-pink-500 rounded font-semibold text-gray-800 p-4">Send</button>
                    {success && <span className="text-green-600">Message sent successfully!</span>}
                    {error && <span className="text-red-500">Message failed to send</span>}
            </form>
        </div>
    </motion.div>
    );
}

export default ContactPage;