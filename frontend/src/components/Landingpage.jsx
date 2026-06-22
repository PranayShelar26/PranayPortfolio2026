import React from "react";
import Grid from "../images/grid.png";
import Floating1 from "../images/Floating_img1.png";
import Floating2 from "../images/Floating_img2.png";
import { motion } from "motion/react";

export const Landingpage = () => {
  return (
    <div id="home" className="bg-[#1B1B1B] overflow-hidden w-screen md:w-full h-screen relative">
      <div className="py-5 px-5 md:py-20 md:px-40 flex items-center h-full">
        {/* Blurred Circles */}
        <div className="h-[250px] w-[250px] md:h-[500px] md:w-[500px] absolute top-[-100px] md:top-[-300px] left-[-100px] md:left-[-250px] blur-[80px] md:blur-[100px] rounded-full bg-[#692DB3] opacity-80"></div>
        <div className="h-[250px] w-[250px] md:h-[500px] md:w-[500px] absolute bottom-[-80px] md:bottom-[-150px] right-[-100px] md:right-[-250px] blur-[80px] md:blur-[100px] rounded-full bg-[#6C4091] opacity-80"></div>

        <motion.img
          className="absolute z-0 w-[80px] md:w-auto top-[100px] md:top-[80px] right-[20px] md:right-[150px]"
          src={Floating1}
          alt=""
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.img
          className="absolute z-0 w-[80px] md:w-auto bottom-[40px] md:bottom-[80px] left-[20px]"
          src={Floating2}
          alt=""
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Background Image */}
        <div className="absolute top-40 md:top-0 pr-5 md:pr-0 md:inset-0 z-0 flex justify-center items-center pointer-events-none">
          <img
            src={Grid}
            className="w-auto h-[500px] opacity-90 object-contain transform md:-translate-x-48"
            alt="Grid background"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex py-10 top-5 md:top-0 flex-col md:flex-row items-start justify-center w-full md:space-x-[4.5rem]">
          {/* Left Text */}
          <div className="flex flex-col items-start justify-center gap-2 md:w-1/2 md:px-10">
            <motion.div
              className="text-white font-BarlowCondensed uppercase text-3xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Pranay Shelar
            </motion.div>

            <motion.h1
              className="font-BarlowCondensed text-white uppercase text-[60px] md:text-[100px] lg:text-[140px] pt-4 md:pt-0 font-extrabold leading-tight md:leading-[8.5rem] text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
            >
              Transforming visions into{" "}
              <motion.span
                className="text-purple-500 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
              >
                reality
              </motion.span>
            </motion.h1>
          </div>

          {/* Right Description */}
          <motion.div
            className="font-HankenGrotesk pt-10 text-[#cfcfcf] text-lg md:text-lg md:max-w-[600px] md:self-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.8 }}
          >
            I'm a <span className="text-white font-semibold">Computing Science student</span>{" "}
            passionate about Full-Stack Web Development and Distributed Systems. I enjoy
            creating responsive web applications, solving complex problems, and developing.
          </motion.div>
        </div>
      </div>
    </div>
  );
};