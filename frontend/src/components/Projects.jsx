"use client";
import React from "react";
import { color, motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import { useRef } from "react";
import NewsAIimg from "../images/NewsAI_Preview.png";
import ThrilltrekImg from "../images/Thrilltrek_cover.png";
import TranslateHubImg from "../images/TranslateHub_homepage.png";
import BooksHavenImg from "../images/BooksHaven_Home.png";
import Particles from "./Particles";

const projects = [
  {
    title: "BooksHaven",
    tag: "Community",
    desc: "Impact tracking platform for nonprofits — visualise progress, share stories, and measure outcomes.",
    src: BooksHavenImg,
    color: "#B53E00",
    href: "https://github.com/PranayShelar26/BooksHaven",
    tools: [
      "ReactJS",
      "Django",
      "Django REST Framework",
      "TailwindCSS",
      "Postman",
      "SQLite",
      "PostgreSQL",
    ],
  },
  {
    title: "NewsAI",
    tag: "AI / NLP",
    desc: "Real-time news aggregation and summarisation powered by large language models with source tracking and   bias detection.",
    src: NewsAIimg,
    color: "#068744",
    href: "https://github.com/PranayShelar26/News-AI",
    tools: ["ReactJS", "BootStrap", "HTML/CSS", "RESTFul API"],
  },
  {
    title: "ThrillTrek",
    tag: "Mobile / Maps",
    desc: "Adventure trip planner with live trail data, weather integration, and community-sourced route ratings.",
    src: ThrilltrekImg,
    color: "#048C84",
    href: "https://www.behance.net/gallery/208741283/ThrillTrek",
    tools: ["Figma", "UI/UX Design"],
  },
  {
    title: "TranslateHub",
    tag: "Productivity",
    desc: "Browser-native translation hub supporting 80+ languages with contextual memory and team workspaces.",
    src: TranslateHubImg,
    color: "#074A8E",
    href: "https://github.com/PranayShelar26/TranslateHub",
    tools: ["HTML/CSS", "JavaScript", "BootStrap", "RESTful APIS"],
  },
];

export const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section id="projects">
        <div className="fixed inset-0 -z-10 bg-black pointer-events-none">
          <Particles
            particleColors={["#7112af", "#c629ff"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={80}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
          />
        </div>

        <main ref={container} className="relative">
          {/* Sticky Heading */}
          <div className="sticky top-0 flex items-center justify-center text-white pointer-events-none">
            <span className="font-BarlowCondensed uppercase font-semibold text-gray-300 text-[100px] sm:text-[120px] md:text-[380px]">
              Project
            </span>
          </div>

          <section className="text-white w-full pb-[20vh] sm:pb-[60vh] md:pb-[100vh]">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project?.href}
                  src={project?.src}
                  title={project?.title}
                  description={project?.desc}
                  color={project?.color}
                  tools={project?.tools}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </section>
    </ReactLenis>
  );
};
export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  tools,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative sm:-top-[25%] origin-top
          w-[90%] sm:w-[80%] lg:w-[70%]
          h-full sm:h-[450px]
          rounded-md
          p-4 sm:p-6 lg:p-10 overflow-hidden"
      >
        <h2 className="text-2xl sm:text-4xl text-center font-BarlowCondensed font-semibold">
          {title}
        </h2>

        {/* Mobile: column (image top, text bottom) | Desktop: row */}
        <div className="flex flex-col sm:flex-row h-full mt-4 sm:mt-5 gap-4 sm:gap-10">
          {/* Image — top on mobile, right on desktop */}
          <div className="relative w-full sm:hidden h-[180px] rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={src}
                alt={title}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          {/* Text */}
          <div className="w-full sm:w-[40%] sm:relative sm:top-[10%]">
            <p className="text-base sm:text-lg font-HankenGrotesk">
              {description}
            </p>
            <span className="flex items-center gap-2 pt-4">
              <a href={url || "#"}
                className="hover:underline transition cursor-pointer text-lg sm:text-xl font-HankenGrotesk"
              >
                View project
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flex flex-wrap gap-2 pt-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="text-sm font-HankenGrotesk px-3 py-1 rounded-full bg-white/20 text-white border border-white/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Image — hidden on mobile (shown above), visible on desktop */}
          <div className="hidden sm:block relative w-[60%] h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={src}
                alt={title}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
