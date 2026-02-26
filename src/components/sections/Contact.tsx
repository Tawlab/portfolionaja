"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Facebook, Copy, Check, ExternalLink, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
    {
        name: "GitHub",
        handle: "@itaw154",
        icon: <Github size={22} />,
        href: "https://github.com/Tawlab",
        color: "#ffffff",
        bg: "bg-white/5",
        hoverColor: "#ffffff",
    },
    {
        name: "Instagram",
        handle: "gx_disxn_",
        icon: <Instagram size={22} />,
        href: "https://www.instagram.com/gx_disxn_/",
        color: "#0A66C2",
        bg: "bg-blue-600/10",
        hoverColor: "#0A66C2",
    },
    {
        name: "Email",
        handle: "adisonsompeng49@gmail.com",
        icon: <Mail size={22} />,
        href: "mailto:adisonsompeng49@gmail.com",
        color: "#00D4FF",
        bg: "bg-neon-blue/10",
        hoverColor: "#00D4FF",
    },
    {
        name: "Facebook",
        handle: "Adison Sompeng",
        icon: <Facebook size={22} />,
        href: "https://www.facebook.com/adison.sompeng",
        color: "#1877F2",
        bg: "bg-blue-500/10",
        hoverColor: "#1877F2",
    },
];

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();

    const copyEmail = () => {
        navigator.clipboard.writeText("adisonsompeng49@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="relative section-padding overflow-hidden"
        >
            <div className="absolute inset-0 mesh-bg pointer-events-none" />

            {/* Grid lines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-neon-lime text-sm font-mono tracking-widest uppercase">
                        {t("06. ติดต่อ", "06. Contact")}
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        {t("Let’s", "Let’s")}{" "}
                        <span className="text-gradient-blue-lime">Connect</span>
                    </h2>
                </motion.div>

                {/* Big email CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card p-8 sm:p-12 mb-12 border border-neon-blue/20 relative overflow-hidden"
                >
                    {/* Glow blob */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-neon-blue/10 blur-3xl rounded-full pointer-events-none" />

                    <div className="relative">
                        <p className="text-slate-400 text-sm mb-2">{t("อีเมลของผม", "My email")}</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
                            <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono break-all sm:break-normal">
                                adisonsompeng49@gmail.com
                            </span>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={copyEmail}
                                className="p-2.5 rounded-xl bg-white/5 hover:bg-neon-blue/10 hover:text-neon-blue transition-all text-slate-400 border border-white/10 hover:border-neon-blue/30"
                                title="คัดลอก"
                            >
                                {copied ? <Check size={16} className="text-neon-lime" /> : <Copy size={16} />}
                            </motion.button>
                        </div>
                        {copied && (
                            <motion.p
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-neon-lime text-sm mt-2"
                            >
                                คัดลอกแล้ว! ✓
                            </motion.p>
                        )}
                    </div>
                </motion.div>

                {/* Social links grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
                    {socials.map((social, i) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className={`glass-card p-5 flex flex-col items-center gap-3 group cursor-pointer border border-white/5 hover:border-opacity-50 transition-all duration-300`}
                            style={{
                                ["--hover-color" as string]: social.color,
                            }}
                        >
                            <div
                                className={`${social.bg} p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}
                                style={{ color: social.color }}
                            >
                                {social.icon}
                            </div>
                            <div className="text-center">
                                <p className="text-white text-sm font-semibold">{social.name}</p>
                                <p className="text-slate-500 text-xs mt-0.5">{social.handle}</p>
                            </div>
                            <ExternalLink
                                size={12}
                                className="text-slate-600 group-hover:text-slate-400 transition-colors"
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Footer note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />
                    <p className="text-slate-600 text-sm">
                        {t("สร้างด้วย ❤️ โดย", "Built with ❤️ by")}{" "}
                        <span className="text-gradient-blue-lime font-semibold">Adison Sompeng</span>
                        {" · "}
                        <span className="font-mono">Next.js + Tailwind CSS + Framer Motion</span>
                    </p>
                    <p className="text-slate-700 text-xs mt-2">
                        © 2024 Adison Sompeng. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
