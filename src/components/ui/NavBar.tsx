"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { href: "#home", label: "หน้าหลัก" },
    { href: "#about", label: "เกี่ยวกับ" },
    { href: "#shortbio", label: "ข้อมูลสั้น" },
    { href: "#activities", label: "ทักษะ" },
    { href: "#works", label: "ผลงาน" },
    { href: "#experience", label: "ประสบการณ์" },
    { href: "#contact", label: "ติดต่อ" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setActive(href);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-dark-bg/80 backdrop-blur-2xl border-b border-white/5 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    onClick={(e) => handleNav(e, "#home")}
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 moving-border-gradient opacity-80" />
                        <div className="absolute inset-[1px] bg-dark-bg rounded-[10px] flex items-center justify-center">
                            <span className="font-mono font-black text-sm text-gradient-blue-lime">AS</span>
                        </div>
                    </div>
                    <span className="font-bold text-white text-base tracking-wide group-hover:text-neon-blue transition-colors">
                        Adison<span className="text-neon-lime"> S.</span>
                    </span>
                </motion.a>

                {/* Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => handleNav(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 block ${active === link.href
                                    ? "text-neon-blue"
                                    : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {active === link.href && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-lg bg-neon-blue/10 border border-neon-blue/20"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="#contact"
                    onClick={(e) => handleNav(e, "#contact")}
                    className="hidden md:block glow-btn text-neon-blue bg-neon-blue/5 hover:bg-neon-blue/10 hover:shadow-neon-blue transition-all"
                >
                    ติดต่อผม
                </a>

                {/* Mobile hamburger */}
                <MobileMenu onNav={handleNav} />
            </nav>
        </motion.header>
    );
}

function MobileMenu({
    onNav,
}: {
    onNav: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
            >
                <div className="w-5 h-4 flex flex-col justify-between">
                    <motion.span
                        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 bg-current rounded"
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        animate={open ? { opacity: 0 } : { opacity: 1 }}
                        className="block h-0.5 bg-current rounded"
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        animate={open ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
                        className="block h-0.5 bg-current rounded"
                        transition={{ duration: 0.2 }}
                    />
                </div>
            </button>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 right-0 bg-dark-card/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-2"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                onNav(e, link.href);
                                setOpen(false);
                            }}
                            className="py-2 text-slate-300 hover:text-neon-blue transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
