import React, { useState } from "react";
import { Mail, Instagram, Linkedin, User, Send } from "lucide-react";
import profile from "../assets/profile.jpg";

function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📩 Form Submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6 flex flex-col items-center">
      {/* 🔹 Section Title */}
      <h2 className="text-3xl font-semibold mb-12 text-center">
        📞 Contact Me
      </h2>

      {/* 🔹 5x5 Grid Layout */}
      <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full max-w-[90%] mx-auto">
        {/* Left — Profile Info */}
        <div className="col-span-2 row-span-5 flex flex-col items-center md:items-start justify-center space-y-6 bg-gray-800 rounded-2xl p-10 shadow-2xl shadow-blue-500/20">
          {/* 👤 Profile Image Frame */}
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
            <img
              src={profile}
              alt="Animesh Kumar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <div className="flex items-center gap-3 mt-4">
            <User className="text-blue-400" />
            <h3 className="text-2xl font-semibold">Animesh Kumar</h3>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            <a
              href="mailto:yourmail@example.com"
              className="text-gray-300 hover:text-white transition"
            >
              animeshkumarbca003@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-3">
            <Instagram className="text-pink-400" />
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              btw.itz.ani
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <Linkedin className="text-blue-500" />
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              linkedin.com/in/animesh-kumar-b284b3256
            </a>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="col-span-3 row-span-5 col-start-3 bg-gray-800 rounded-2xl p-10 shadow-2xl shadow-purple-500/20 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="mb-2 text-sm text-gray-300">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="yourmail@example.com"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col text-left">
              <label htmlFor="subject" className="mb-2 text-sm text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subject"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-lg bg-gray-700 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 rounded-full py-3 text-lg font-semibold shadow-md hover:shadow-blue-400/50"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* 🔹 Footer */}
      <p className="text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Animesh Kumar. All rights reserved.
      </p>
    </div>
  );
}

export default ContactUs;
