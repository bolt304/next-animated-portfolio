"use client";
import {useState} from 'react';
import Link from 'next/link';

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/projects", title: "Projects"},
  {url: "/contact", title: "Contact"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:-12 lg:px-20 xl:px-48">
        {/* Logo */}
        <div className="">
          <Link href="/" 
            className="text-sm bg-pink-300 rounded-md p-1 font-semibold flex items-center justify-center">
            <span className="text-black mr-1">Esther Carmona</span>
          </Link>
        </div>
        {/* Menu */}
        <div className="">
          <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
          onClick={(()=>setOpen(!open))}>
            <div className="w-10 h-1 bg-white rounded"></div>
            <div className="w-10 h-1 bg-white rounded"></div>
            <div className="w-10 h-1 bg-white rounded"></div>
          </button>
        {/* Menu list */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl">
            {links.map(link => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
        </div>
      </div>
  );
}

export default Navbar;