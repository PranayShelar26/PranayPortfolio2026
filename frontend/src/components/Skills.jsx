import React from "react";

const skillsAll = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Rust",
    icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/rust-1.png",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

const experience = [
  {
    date: "December 2024 – July 2025",
    role: "Application Cloud Support Engineer",
    org: "Accenture",
  },
  {
    date: "August 2024 – September 2024",
    role: "Front End Web Development Intern",
    org: "Techplement",
  },
];

const education = [
  {
    date: "September 2025",
    role: "MSc in Computing Science",
    org: "University of Glasgow",
  },
  {
    date: "September 2021 – June 2024",
    role: "Bachelors in Computer Application",
    org: "Amity University Mumbai",
  },
];

const CalendarIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TimelineItem = ({ date, role, org, delay }) => (
  <li
    className="relative ms-6 opacity-0 animate-fadeUp"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <span className="absolute flex items-center justify-center w-7 h-7 bg-purple-500 rounded-full -start-[1.85rem] top-0.5 text-white">
      <CalendarIcon />
    </span>
    <span className="inline-block bg-[#3a3a3a] text-gray-300 text-xs px-2 py-0.5 rounded mb-1">
      {date}
    </span>
    <h3 className="text-white font-bold text-xl font-BarlowCondensed my-1">
      {role}
    </h3>
    <p className="text-gray-400 text-sm">{org}</p>
  </li>
);

const SkillCard = ({ name, icon, delay }) => (
  <div
    className="skill-card-wrapper"
    style={{ perspective: "600px", height: "100px" }}
  >
    <div
      className="skill-card"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="pulse-ring" />
      <div className="skill-face py-2 skill-front">
        <img src={icon} alt={name} className="w-10 h-10" />
        <span className="text-white pt-2 text-xs font-medium">{name}</span>
      </div>
      <div className="skill-face skill-back">
        <span className="text-purple-400 text-lg">✦</span>
        <span className="text-purple-300 text-xs font-semibold">{name}</span>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(20px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseRing {
          0%   { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.1); }
        }
        .animate-fadeUp { animation: fadeUp 0.5s forwards; }
        .skill-card { animation: floatIn 0.45s forwards; }
        .skill-card:hover { transform: rotateY(180deg); }
        .skill-face {
          position: absolute; inset: 0; backface-visibility: hidden;
          border-radius: 12px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 6px;
          border: 1px solid #484848;
        }
        .skill-front { background: #363636; }
        .skill-back  { background: #2d1f52; transform: rotateY(180deg); border-color: #7c3aed; }
        .pulse-ring  {
          position: absolute; inset: -3px; border-radius: 14px;
          border: 1.5px solid #7c3aed; opacity: 0; pointer-events: none;
          animation: pulseRing 2.2s ease-out infinite;
        }
        .skill-card:hover .pulse-ring { display: none; }
      `}</style>

      <div id="skills" className="bg-[#202020] px-6 py-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 mx-2 md:mx-[100px] items-start">
          {/* LEFT — Experience stacked above Education */}
          <div className="flex flex-col gap-5">
            <div className=" bg-[#2C2C2C] border border-[#6E6C6C] p-5 rounded-xl">
              <div className="text-purple-500 font-BarlowCondensed uppercase text-4xl font-bold">
                Experience
              </div>
              <ol className="mx-5 my-5 relative border-s border-default">
                <li className="mb-5 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-400 rounded-full -start-4 ">
                    <svg
                      className="w-4 h-4 text-fg-brand-strong"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>
                  </span>
                  <time className="bg-gray-700 font-HankenGrotesk text-gray-200 border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
                    December 2024 - July 2025
                  </time>
                  <h3 className="flex items-center mb-1 text-2xl text-white font-BarlowCondensed font-semibold my-2">
                    Application Cloud Support Engineer
                  </h3>
                  <p className="mb-2 font-HankenGrotesk text-l  text-gray-400 ">
                    Accenture
                  </p>
                </li>
                <li className=" ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-400 rounded-full -start-4 ">
                    <svg
                      className="w-4 h-4 text-fg-brand-strong"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>
                  </span>
                  <time className="bg-gray-700 font-HankenGrotesk text-gray-200 border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
                    August 2024 - September 2024
                  </time>
                  <h3 className="flex items-center mb-1 text-2xl text-white font-BarlowCondensed font-semibold my-2">
                    Front End Web Development Intern
                  </h3>
                  <p className="mb-2 font-HankenGrotesk text-l  text-gray-400 ">
                    Techplement
                  </p>
                </li>
              </ol>
            </div>

            {/* Education section */}
            <div className=" bg-[#2C2C2C] border border-[#6E6C6C] p-5 rounded-xl">
              <div className="text-purple-500 font-BarlowCondensed uppercase text-4xl font-bold">
                Education
              </div>
              <ol className="mx-5 my-5 relative border-s border-default">
                <li className="mb-5 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-400 rounded-full -start-4 ">
                    <svg
                      className="w-4 h-4 text-fg-brand-strong"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>
                  </span>
                  <time className="bg-gray-700 font-HankenGrotesk text-gray-200 border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
                    September 2025
                  </time>
                  <h3 className="flex items-center mb-1 text-2xl text-white font-BarlowCondensed font-semibold my-2">
                    Msc in Computing Science
                  </h3>
                  <p className="mb-2 font-HankenGrotesk text-l  text-gray-400 ">
                    University of Glasgow
                  </p>
                </li>
                <li className=" ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-400 rounded-full -start-4 ">
                    <svg
                      className="w-4 h-4 text-fg-brand-strong"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                      />
                    </svg>
                  </span>
                  <time className="bg-gray-700 font-HankenGrotesk text-gray-200 border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded">
                    September 2021 - June 2024
                  </time>
                  <h3 className="flex items-center mb-1 text-2xl text-white font-BarlowCondensed font-semibold my-2">
                    Bachelors in Computer Application
                  </h3>
                  <p className="mb-2 font-HankenGrotesk text-l  text-gray-400 ">
                    Amity University Mumbai
                  </p>
                </li>
              </ol>
            </div>
          </div>

          {/* RIGHT — Skills */}
          <div className=" bg-[#2C2C2C] border h-full border-[#6E6C6C] p-5 rounded-xl">
            <div className="text-purple-500 font-BarlowCondensed uppercase text-4xl font-bold mb-5">
              Skills
            </div>
            <div className="grid grid-cols-3 gap-5 px-2 pt-5">
              {skillsAll.map((s, i) => (
                <SkillCard key={s.name} {...s} delay={i * 55} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
