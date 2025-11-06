import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactUs from "../components/Contact";

const deployTools = [

  { name: "AWS", img: "/aws.png", desc: "Amazon Web Services supports scalable cloud infrastructure for full-stack applications." },
  { name: "GitHub Actions", img: "/gitaction.png", desc: "Automate CI/CD pipelines directly from your GitHub repositories." },
];

export default function Deployment() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="text-center pt-24 pb-10">
        <h1 className="text-4xl font-bold">
          Deployment <span className="text-green-500">Tools</span>
        </h1>
        <p className="text-gray-400 mt-2">Cloud and DevOps tools that bring projects live efficiently.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-8 max-w-6xl mx-auto">
        {deployTools.map((tool) => (
          <motion.div
            key={tool.name}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 border border-white/20 rounded-2xl 
            cursor-pointer hover:shadow-green-500/40 hover:border-green-400 transition-all duration-300"
            onClick={() => setSelected(tool)}
          >
            <img src={tool.img} alt={tool.name} className="w-full h-40 object-contain p-4" />
            <div className="text-center py-2 text-lg font-semibold">{tool.name}</div>
          </motion.div>
        ))}
      </div>

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
              className="relative bg-white/10 border border-white/20 rounded-3xl p-10 w-[90%] max-w-3xl text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 hover:bg-red-600 rounded-full p-2">
                <X size={22} />
              </button>
              <div className="flex flex-col items-center gap-6 text-center">
                <img src={selected.img} alt={selected.name} className="w-28 h-28 object-contain" />
                <h2 className="text-3xl font-bold">{selected.name}</h2>
                <p className="text-gray-300 text-lg leading-relaxed">{selected.desc}</p>
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
