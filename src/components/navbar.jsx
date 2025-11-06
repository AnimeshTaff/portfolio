import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    setActive(id);

    // If user is not on the home page, navigate to it first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-12 py-5 bg-gray-900 text-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1
        className="text-xl font-semibold tracking-wide cursor-pointer"
        onClick={() => navigate("/")}
      >
        WEL<span className="text-red-600">COME</span>
      </h1>

      {/* Menu Links */}
      <div className="flex items-center gap-8 font-semibold">
        {/* Home */}
        <button
          onClick={() => handleScroll("home")}
          className={`relative pb-1 transition-all ${
            active === "home" ? "text-red-500" : "hover:text-red-500"
          } border-b-2 ${
            active === "home" ? "border-red-500" : "border-transparent"
          } hover:border-red-500`}
        >
          Home
        </button>

        {/* About */}
        <button
          onClick={() => handleScroll("about")}
          className={`relative pb-1 transition-all ${
            active === "about" ? "text-red-500" : "hover:text-red-500"
          } border-b-2 ${
            active === "about" ? "border-red-500" : "border-transparent"
          } hover:border-red-500`}
        >
          About
        </button>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-2 pb-1 border-b-2 ${
              active === "services"
                ? "border-red-500 text-red-500"
                : "border-transparent"
            } hover:border-red-500 hover:text-red-500 transition-all`}
          >
            Services <ChevronDown size={18} />
          </button>

          {open && (
            <div
              onMouseLeave={() => setOpen(false)}
              className="absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <Link
                to="/web-design"
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                Web Design
              </Link>
              <Link
                to="/development"
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                Development
              </Link>
              <Link
                to="/deployment"
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setOpen(false)}
              >
                Deployment
              </Link>
            </div>
          )}
        </div>

        {/* Contact */}
        <button
          onClick={() => handleScroll("contact")}
          className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          hover:from-pink-500 hover:to-orange-400 text-white transition shadow-md font-bold"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
