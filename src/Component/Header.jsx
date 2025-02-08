import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScrolled);
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);
  return (
    <header
      className={`fixed w-full text-white flex justify-center  z-10 ${
        scrolled
          ? "bg-gray-900 duration-200 ease-in px-0"
          : "bg-black duration-200 ease-in  p-[3px] bg-gray-900"
      } `}
    >
      <div className="bg-black w-full px-10 py-2 flex justify-between">
        <Link to="resume" className="font-extralight sanchit text-4xl">SANCHIT</Link>
        <div className="link flex gap-15 ms:hidden text-2xl ">
          <Link to="/">Home</Link>
          <Link to="aboutProject">Project</Link>
          <Link to="about">About</Link>
          <Link to="Contact-Us">Contact</Link>
          <Link to="Resume">Resume </Link>
        </div>
      </div>
    </header>
  );
};
