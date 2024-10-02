import React, { useEffect, useState } from "react";
import { MdOutlineMenuBook } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("history");

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function closeOnClick() {
    setIsOpen(false);
  }

  function ButtonContact() {
    return (
      <a
        href="https://www.google.com"
        className="invisible bg-blue-950 px-5 py-1 hover:bg-blue-500 sm:invisible lg:visible md:visible rounded-lg"
      >
        contact garv
      </a>
    );
  }

  const handleScroll = () => {
    const sections = ["history", "importantthinkers", "coreprinciples"];
    const scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition < offsetTop + height && scrollPosition >= offsetTop) {
          setActive(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = targetId => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navlinks = (
    <ul className="md:flex md:space-x-16">
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("history");
          }}
          className={`hover:text-black ${active === 'history' ? 'text-blue-500' : ''}`}
          href="#history"
        >
          history
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("importantthinkers");
          }}
          className={`hover:text-black ${active === 'importantthinkers' ? 'text-blue-500' : ''}`}
          href="#importantthinkers"
        >
          important thinkers
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("coreprinciples");
          }}
          className={`hover:text-black ${active === 'coreprinciples' ? 'text-blue-500' : ''}`}
          href="#coreprinciples"
        >
          core principles
        </a>
      </li>
    </ul>
  );

  return (
    <header className="bg-red-800 hover:bg-red-700 text-white text-lg py-2 px-8 fixed flex top-0 left-0 right-0 z-10">
      <div className="container flex h-10 justify-between items-center">
        <a className="flex space-x-1" href="/">
          <img src="logo.jpg" alt="logo" className="h-10" />
          STOIC
        </a>

        <nav className="flex justify-between invisible sm:invisible lg:visible md:visible">
          {navlinks}
        </nav>
        <ButtonContact />
        <div className="md:hidden">
          <button onClick={handleToggle}>
            <MdOutlineMenuBook className="size-10" />
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          onClick={closeOnClick}
          className="flex flex-col justify-center absolute w-full left-0 top-full bg-red-800 md:hidden"
        >
          <ul className="flex-col space-y-1">
          {navlinks.props.children }  
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
