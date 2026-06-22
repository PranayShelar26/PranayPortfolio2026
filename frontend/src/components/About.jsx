import React from "react";
import profile_img from "../images/profile.jpg";
import Grid from "../images/grid.png";
import { motion } from "motion/react";

export const About = () => {
  return (<>
    <div id="about" className=" relative flex flex-col md:overflow-hidden bg-[#202020] w-screen md:w-auto text-white h-auto md:px-20 px-2 py-5 md:py-10">
      {/* header */}

      <div className="flex z-10 flex-col md:flex-row px-4 lg:px-0 justify-between align-middle items-center gap-5 md:gap-10">
        <motion.div
          className="font-BarlowCondensed font-bold leading-[4.5rem] text-[50px]  md:text-[80px] uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hello <span className="text-purple-500">Everyone</span>
        </motion.div>
        <motion.div
          className="font-HankenGrotesk text-[#cfcfcf] font-medium text-lg md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          Whether I’m designing an app, a website, or an interactive
          interface, my goal is to create products that not only meet business
          objectives but also resonate with users on a meaningful level.
        </motion.div>
        <motion.div
          className="font-HankenGrotesk text-[#cfcfcf] font-medium text-lg md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          I'm particularly interested in distributed systems and scalable
          application design. I enjoy learning how modern technologies work
          together to build reliable, efficient, and high-performance
          solutions.
        </motion.div>
      </div>

      {/* BG image */}
      <div className="absolute top-[300px] md:inset-0 z-0 flex md:mr-[300px] justify-center items-center pointer-events-none">
        <img
          src={Grid}
          className="w-auto h-[500px] opacity-90 object-contain"
          alt="Grid background"
        />
      </div>

      {/* Photo */}
      <div className=" py-5 px-4 md:px-0 md:py-10 z-10 flex flex-col justify-center items-center md:flex-row gap-10">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Static glow */}
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-[#9431DC] opacity-40 blur-[80px]" />

          {/* Image */}
          <div className="relative z-10 h-auto w-[300px] md:w-[400px] flex justify-center rounded-lg overflow-hidden items-center">
            <img src={profile_img} className="h-full w-full object-cover" alt="" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center md:ml-[100px] items-center align-middle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          
          <a  href=""
            className="font-BarlowCondensed group relative overflow-hidden
            inline-flex items-center gap-2 uppercase font-semibold text-2xl
            py-2 px-5 border-2 border-white rounded-2xl text-white 
          hover:text-black transition-colors duration-300 ease-in-out"
          >
            {/* Sliding white fill */}
            <span
              className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0
              transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            />

            <span className="relative z-10">Download CV</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              className="relative z-10 h-7 w-7
               group-hover:invert-0
              transition-transform duration-300 ease-in-out"
            >
              <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="z-0 items-center flex justify-center font-BarlowCondensed uppercase opacity-30 mt-[-150px] text-white text-[60px] md:text-[160px] font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Pranay Shelar
      </motion.div>
    </div>
    </>
  );
};