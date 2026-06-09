"use client";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#projects" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={`flex items-center justify-between w-full max-w-4xl
          pl-7 pr-2 py-2 rounded-full transition-all duration-500
          ${scrolled
            ? "bg-[#0f051980] border backdrop-blur-lg border-[#9431DC40] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-white/[0.04] border backdrop-blur-sm border-white/[0.08]"
          }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-BarlowCondensed font-bold text-2xl text-white uppercase tracking-wide">
            Pra<span className="text-purple-500">nay</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 mx-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`relative text-md font-HankenGrotesk font-medium tracking-wide
                pb-0.5 transition-colors duration-250 group
                ${active === link.label ? "text-white" : "text-white/50 hover:text-white"}`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-px bg-[#9431DC]
                  transition-all duration-300
                  ${active === link.label ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="font-BarlowCondensed font-bold uppercase tracking-wide text-md
            text-white px-5 py-2.5 rounded-full
            bg-gradient-to-br from-[#9431DC] to-[#6d1fa8]
            border border-[#9431DC66]
            hover:shadow-[0_0_20px_rgba(148,49,220,0.5)]
            hover:scale-[1.03] transition-all duration-250"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
};