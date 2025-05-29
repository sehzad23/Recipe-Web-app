import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div className="flex items-center justify-around p-5">
        <div className="logo font-bold text-4xl lg:text-5xl text-orange-500">
          Cook..
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-xl gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/recipe"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            Explore Recipe
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            Favorite
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 text-xl md:hidden items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/recipe"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
            onClick={toggleMenu}
          >
            Explore Recipe
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
            onClick={toggleMenu}
          >
            Favorite
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-500 font-bold" : ""
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
