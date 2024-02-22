"use client";
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './navLink';
import {motion} from 'framer-motion';

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/projects", title: "Projects"},
  {url: "/contact", title: "Contact"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(251, 207, 232)",
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(251, 207, 232)",
    }
  };

  const listVariants = {
    closed: {
      x: "100vw",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
    opened: {
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.08,
      }
    }
  };
  
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (

      <div className="h-full flex items-center justify-between p-4 sm:p-8 md:p-12 lg:p-8 xl:p-10 text-l my-0">
        <div className="hidden md:flex gap-4 w-1/3 font-semibold">
          {links.map(link => (
            <NavLink link={link} key={link.title}/>
          ))}
        </div>
        {/* Logo */}
        <div className="md:hidden lg:flex w-1/3">
          <Link href="/" 
            className="text-sm bg-pink-300 rounded-md p-1 font-semibold flex items-center justify-center">
            <span className="text-black mr-1 ml-1">Esther Carmona</span>
          </Link>
        </div>
        {/* Iconos */}
        <div className='hidden md:flex gap-4 w-3/3'>
          <Link href="https://github.com/LentinulaEdode" passHref>
          <div onClick={(e) => { e.preventDefault(); window.open("https://github.com/LentinulaEdode", "_blank"); }}>
          <Image src="/github.png" alt="" width={28} height={28} />
          </div>
          </Link>
          <Link href="https://www.linkedin.com/in/esthercarmonaa/" passHref>
          <div onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/esthercarmonaa/", "_blank"); }}>
          <Image src="/linkedin.png" alt="" width={28} height={28} />
          </div>
          </Link>
        </div>

        {/* Responsive Menu & Buttons */}
        <div className="md:hidden">
          <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
          onClick={(()=>setOpen(!open))}
          >
            <motion.div 
            variants={topVariants} 
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div 
            variants={centerVariants} 
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div 
            variants={bottomVariants} 
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>


        {/* Menu list */}
        {open && (
          <motion.div 
          variants={listVariants} 
          initial="closed" 
          animate="opened" 
          className="fixed top-0 left-0 w-screen h-screen bg-neutral-900 text-pink-200 flex flex-col items-center justify-center gap-8 text-2xl z-40"
          >
            {links.map(link => (
            <motion.div variants={listItemVariants} className="" key={link.title}>
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
            ))}
          </motion.div>
        )}
        </div>
      </div>
  );
}

export default Navbar;