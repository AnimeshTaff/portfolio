import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactUs from "../components/Contact.jsx";


const tools = [
  {
    name: "HTML",
    img: "/html.png",
    desc: "HTML forms the structure of every web page. It defines the layout and elements that browsers render visually.",
  },
  {
    name: "CSS",
    img: "/css.png",
    desc: "CSS brings style and life to the web — from colors to layouts, animations, and responsive design.",
  },
  {
    name: "JavaScript",
    img: "/javascript.png",
    desc: "JavaScript adds interactivity — handling user actions, animations, and dynamic page updates.",
  },
  {
    name: "React",
    img: "/react.png",
    desc: "React is a powerful frontend library for building component-based UIs and dynamic single-page apps.",
  },
  {
    name: "Tailwind CSS",
    img: "/Tailwind.png",
    desc: "Tailwind CSS allows rapid UI styling using utility classes, making design fast, responsive, and consistent.",
  },
  {
    name: "WordPress",
    img: "/wordpress.png",
    desc: "WordPress is a CMS for building websites and blogs easily, with plugins and themes for custom features.",
  },
  {
    name: "Shopify",
    img: "/shopify.png",
    desc: "Shopify simplifies eCommerce development with customizable stores, secure payments, and hosting.",
  },
  {
    name: "WooCommerce",
    img: "/woocommerce.png",
    desc: "WooCommerce integrates with WordPress to create feature-rich online stores with full control.",
  },

];

export default function WebDesign() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      
      {/* Heading */}
      <div className="text-center pt-10 pb-10">
        <h1 className="text-4xl font-bold tracking-wide">
          Web Design <span className="text-pink-500">Tools</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Explore the technologies I use to craft beautiful and efficient web experiences.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-8 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
            shadow-md overflow-hidden cursor-pointer hover:shadow-pink-500/40 hover:border-pink-400 
            transition-all duration-300"
            onClick={() => setSelected(tool)}
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="w-full h-40 object-contain p-4 transition-transform duration-300 hover:scale-110"
            />
            <div className="text-center py-2 text-lg font-semibold">
              {tool.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-white/10 border border-white/20 rounded-3xl p-10 w-[95%] max-w-3xl text-white
              shadow-2xl backdrop-blur-md overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/60 rounded-full p-2 hover:bg-red-600"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col items-center gap-6 text-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-28 h-28 object-contain"
                />
                <h2 className="text-3xl font-bold">{selected.name}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selected.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact">
        <ContactUs />
      </section>

    </div>
  );
}
