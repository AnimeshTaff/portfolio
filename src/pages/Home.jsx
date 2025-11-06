import "../App.css";
import { MoveUpRight, X } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "../components/navbar";
import AboutUs from "../components/about";
import AnimatedTitle from "../components/AnimatedTitle";
import ContactUs from "../components/Contact.jsx";


export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      heading: "Backend Development",
      text: "I build reliable and scalable backend systems using Node.js and Express.js. From designing secure APIs to managing server logic and data handling, I ensure smooth communication between the frontend and backend with a focus on speed, security, and performance.",
      button: "Read More",
      bg: "/backend.jpg",
    },
    {
      id: 2,
      heading: "Database Management",
      text: "I handle data storage and integration using databases such as MySQL. Alongside this, I use CMS platforms like Strapi, WordPress, and Shopify to develop flexible content systems that improve scalability and user experience.",
      button: "Explore",
      bg: "/data.jpg",
    },
    {
      id: 3,
      heading: "Frontend Development",
      text: "I specialize in crafting engaging and responsive user interfaces using React, Tailwind CSS, and JavaScript. My focus is on creating clean, modern designs with seamless navigation, ensuring every website feels intuitive, fast, and optimized for all devices.",
      button: "Details",
      bg: "/frontend.jpg",
    },
    {
      id: 4,
      heading: "DevOps & Cloud",
      text: "I work with cloud platforms like AWS and Hostinger to deploy, monitor, and scale applications effectively. My experience includes managing environments, optimizing performance, automating workflows, and maintaining uptime for high-traffic, production-ready web applications.",
      button: "Learn More",
      bg: "/cloud.jpg",
    },
  ];

  const cardsLoop = [...cards, ...cards, ...cards];
  const rightRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: rightRef });
  const scrollBoost = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scrollSpring = useSpring(scrollBoost, { stiffness: 200, damping: 40 });
  const baseX = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    const move = (delta / 1000) * 60;
    let newPos = baseX.get() - move;
    if (newPos <= -1200) newPos = 0;
    baseX.set(newPos);
  });

  const x = useTransform(baseX, (v) => v + scrollSpring.get());
  const openPopup = (card) => setSelectedCard(card);
  const closePopup = () => setSelectedCard(null);

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto bg-gray-900 scroll-smooth">
      

      {/* HOME SECTION */}
      <section id="home" className="grid grid-cols-5 grid-rows-5 flex-1 min-h-[80vh]">
        {/* Left Section */}
        <div className="col-span-2 row-span-5 bg-gray-900 m-3 p-10 rounded-xl shadow-xl overflow-y-auto">
          <h1 className="font-bold text-lg py-10 text-white">
            Hello From <AnimatedTitle />
          </h1>

          <p className="text-white leading-relaxed">
            Hi,{" "}
            <span className="text-red-500 text-xl font-semibold">
              I’m Animesh Kumar
            </span>
            , a passionate Front-End Developer who transforms ideas into
            interactive and user-friendly web experiences. I specialize in
            React, Tailwind CSS, and modern UI design, combining creativity with
            clean, efficient code.
            <br />
            <br />
            With hands-on experience in JavaScript, Node.js, and Express.js, I
            also manage backend workflows and API integrations. My toolkit
            includes HTML, CSS, React, Tailwind CSS, and GitHub for version
            control, while I use AWS and Hostinger for seamless deployment.
            <br />
            <br />
            I’ve worked with CMS platforms like Strapi, WordPress, WooCommerce,
            and Shopify, enabling fast and scalable content management
            solutions. Always eager to learn and evolve, I focus on building
            responsive, high-performing applications that deliver real value
            across every device.
          </p>

          <a
            href="/Animesh_Kumar_CV.pdf"
            download="Animesh_Kumar_CV.pdf"
            className="mt-10 inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white items-center gap-2 hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Download CV <MoveUpRight size={16} />
          </a>
        </div>

        {/* Right Section with Animated Cards */}
        <div
          ref={rightRef}
          className="col-span-3 row-span-5 col-start-3 bg-gray-900 flex items-center justify-center text-lg font-semibold p-6 overflow-hidden"
        >
          <motion.div
            className="flex gap-6 w-full h-full"
            style={{ x }}
            transition={{ ease: "linear", duration: 0 }}
          >
            {cardsLoop.map((card, index) => (
              <motion.div
                key={`${card.heading}-${index}`}
                className="relative min-w-[350px] h-[590px] rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between text-white cursor-pointer"
                style={{
                  backgroundImage: `url(${card.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
                <div className="relative p-6 flex flex-col justify-between h-full">
                  <h1 className="text-lg font-extrabold mb-2">{card.heading}</h1>
                  <p className="text-sm text-left text-gray-100 leading-relaxed">
                    {card.text}
                  </p>
                  <button
                    onClick={() => openPopup(card)}
                    className="mt-6 w-fit px-5 py-2 rounded-full text-white flex items-center gap-2 transition bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-orange-400 text-sm shadow-md"
                  >
                    {card.button} <MoveUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <AboutUs />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <ContactUs />
      </section>

      {/* POPUP */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <motion.div
            className="relative bg-white/10 rounded-3xl p-10 w-[80%] h-[80%] max-w-5xl text-white shadow-2xl border border-white/20 backdrop-blur-md overflow-hidden flex flex-col justify-between items-center"
            style={{
              backgroundImage: `url(${selectedCard.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-black/60 z-0 rounded-3xl"></div>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 bg-black/60 rounded-full p-3 hover:bg-black/80 transition"
            >
              <X size={22} />
            </button>
            <div className="relative z-10 text-center p-6 max-w-3xl flex-1 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-6">{selectedCard.heading}</h1>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                {selectedCard.text}
              </p>
            </div>
            <div className="relative z-10 mb-6">
              <button
                onClick={() => {
                  closePopup();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-10 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-orange-400 text-white transition shadow-md text-lg"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
