import React, { useState } from "react";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const handleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex justify-between item p-3 w-full text-white md:pl-20 md:pr-20 md:pt-5 z-50 fixed top-0 bg-black">
        <div>
          <a className="text-3xl font-bold" href="/">
            Arman <span className="text-orange-500">Ali</span>
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenu}>
            {isOpen ? (
              <i className="text-3xl fa-solid fa-xmark"></i>
            ) : (
              <i className="text-3xl fa-solid fa-bars"></i>
            )}
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex  gap-12">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact" className="bg-orange-600 hover:bg-blue-700 p-2 rounded-2xl">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div onMouseLeave={()=>{setisOpen(false)}}
        className={`absolute top-[60px] left-0 w-full bg-black z-50 md:hidden p-3 transition-all duration-300 ease-in-out transform
  ${
    isOpen
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
  }
`}
      >
        <ul className="space-y-6 text-white text-center">
          <li>
            <a href="#home">Home</a>
          </li >
          <li >
            <a href="#about">About</a>
          </li>
          <li >
            <a href="#services">Services</a>
          </li>
          <li >
            <a href="#skills">Skills</a>
          </li>
          <li >
            <a href="#projects">Projects</a>
          </li>
          <li >
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
