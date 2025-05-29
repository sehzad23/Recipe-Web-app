
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Cook. and Tagline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cook.</h2>
          <p className="text-md max-w-lg mx-auto leading-relaxed">
            From quick and easy meals to gourmet delights, we have something for
            every taste and occasion.
          </p>
          <hr className="border-gray-700 my-8 w-1/4 mx-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-12 text-lg">
          <Link
            to="/about"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/recipe"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Recipes
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            Contest
          </Link>
        </div>

        {/* Bottom Section: Copyright and Social Icons */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cook. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
