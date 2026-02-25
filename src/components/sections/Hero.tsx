"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Cpu, Code2, Wifi } from "lucide-react";

const CHARS = "Adison Sompeng".split("");

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const letterVariant = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const taglines = [
    { icon: <Cpu size={14} />, text: "Computer Engineering Student" }
];

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
            alpha: number;
            color: string;
        }[] = [];

        const colors = ["#00D4FF", "#BAFF29", "#B24BF3"];
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.6 + 0.2,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        let animId: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                ctx.restore();
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid"
        >
            {/* Particle canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

            {/* Gradient mesh */}
            <div className="absolute inset-0 mesh-bg pointer-events-none" />

            {/* Grid lines */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,212,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Glowing orb */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(0,212,255,0.12) 0%, rgba(186,255,41,0.06) 40%, transparent 70%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16">
                {/* Small badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-slate-400 mb-10 border border-neon-blue/20"
                >
                    <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse2" />
                    พร้อมรับโปรเจกต์ใหม่ · Available for opportunities
                </motion.div>

                {/* Animated name */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center justify-center gap-0 sm:gap-2 mb-6"
                >
                    {CHARS.map((ch, i) => (
                        <motion.span
                            key={i}
                            variants={letterVariant}
                            className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight inline-block"
                            style={{
                                color: i < 6 ? "white" : "#00D4FF",
                                textShadow: i >= 6 ? "0 0 40px #00D4FF88" : "none",
                            }}
                        >
                            {ch}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Taglines */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-10"
                >
                    {taglines.map((t, i) => (
                        <span
                            key={i}
                            className="flex items-center gap-1.5 text-sm text-slate-400 font-medium"
                        >
                            <span className="text-neon-blue">{t.icon}</span>
                            {t.text}
                            {i < taglines.length - 1 && (
                                <span className="ml-3 text-dark-border hidden sm:inline">|</span>
                            )}
                        </span>
                    ))}
                </motion.div>

                {/* Thai subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-slate-400 text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    นักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี
                    <br className="hidden sm:block" />
                    <span className="text-slate-300"> สร้างสรรค์ผลงานด้วย Code และ Passion</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollTo("#works")}
                        className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neon-blue text-dark-bg font-bold text-sm tracking-wide hover:shadow-neon-blue transition-all duration-300"
                    >
                        ดูผลงาน
                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollTo("#contact")}
                        className="glow-btn flex items-center gap-2 text-slate-300 hover:text-white bg-white/5"
                    >
                        <Download size={16} />
                        ติดต่อ / Resume
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="mt-20 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2.5 rounded-full bg-neon-blue" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
