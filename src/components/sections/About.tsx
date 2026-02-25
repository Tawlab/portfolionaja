"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart, Coffee } from "lucide-react";
import Image from "next/image";

const interests = [
    { emoji: "☁️", label: "AWS Cloud", color: "text-neon-blue" },
    { emoji: "🇯🇵", label: "ภาษาญี่ปุ่น", color: "text-red-400" },
    { emoji: "🏋️", label: "ฟิตเนส", color: "text-neon-lime" },
    { emoji: "⛏️", label: "Minecraft", color: "text-green-400" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function About() {
    return (
        <section id="about" className="relative section-padding overflow-hidden">
            <div className="absolute inset-0 mesh-bg pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">
                        01. เกี่ยวกับผม
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        About <span className="text-gradient-blue-lime">Me</span>
                    </h2>
                </motion.div>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Rotating outer ring */}
                            <div className="absolute -inset-4 rounded-full border border-dashed border-neon-blue/20 animate-spin-slow" />
                            <div className="absolute -inset-8 rounded-full border border-dashed border-neon-lime/10 animate-spin-slow [animation-direction:reverse] [animation-duration:30s]" />

                            {/* Profile card */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 glass-card overflow-hidden flex items-center justify-center">
                                {/* Placeholder gradient avatar */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #0D1117 0%, #0A1628 40%, #00D4FF11 100%)",
                                    }}
                                />
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    <div className="w-24 h-24 rounded-full moving-border-gradient p-[2px]">
                                        <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center">
                                            <span className="text-4xl font-black text-gradient-blue-lime">AS</span>
                                        </div>
                                    </div>
                                    <span className="text-white font-bold text-lg">Adison Sompeng</span>
                                    <span className="text-slate-500 text-xs">@Adison Sompeng</span>
                                </div>

                                {/* Glow effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neon-blue/10 to-transparent" />
                            </div>

                            {/* Location badge */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                            >
                                <MapPin size={12} className="text-neon-lime" />
                                <span className="text-xs text-slate-300">Phrae, Thailand 🇹🇭</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bio text */}
                    <div className="space-y-6">
                        <motion.div
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <GraduationCap className="text-neon-blue" size={24} />
                                สวัสดีครับ ผมอดิศร สมเป็ง
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-base">
                                ผมเป็นนักศึกษาสาขา <span className="text-neon-blue font-semibold">วิศวกรรมคอมพิวเตอร์</span>{" "}
                                มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT) ปทุมธานี
                                มีความหลงใหลในการพัฒนาซอฟต์แวร์ทั้งฝั่ง Frontend และ Backend
                                รวมถึงการสร้างสรรค์ผลงานด้าน IoT
                            </p>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-slate-400 leading-relaxed text-base">
                                เติบโตมาจากจังหวัด<span className="text-neon-lime font-semibold">แพร่</span>{" "}
                                ภาคเหนือของไทย มีความสนใจพิเศษในเรื่อง Cloud Computing (AWS),
                                ภาษาญี่ปุ่น, การออกกำลังกาย และการสร้าง Minecraft Server
                                ผมเชื่อว่าการเขียนโค้ดก็เป็นรูปแบบของงานศิลปะแบบหนึ่ง
                            </p>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Heart size={14} className="text-red-400" />
                                <span className="text-slate-400 text-sm font-medium">ความสนใจ / Interests</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {interests.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className="glass-card px-4 py-2.5 flex items-center gap-2 cursor-default"
                                    >
                                        <span className="text-lg">{item.emoji}</span>
                                        <span className={`text-sm font-medium ${item.color}`}>{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Status */}
                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass-card p-4 flex items-center gap-3 border-l-2 border-neon-lime"
                        >
                            <Coffee className="text-neon-lime shrink-0" size={18} />
                            <p className="text-slate-300 text-sm">
                                ปัจจุบันกำลังศึกษาและพัฒนาตัวเองในด้าน{" "}
                                {/* <span className="text-neon-lime font-semibold">AWS Cloud</span> และ{" "} */}
                                <span className="text-neon-blue font-semibold">Full-stack Development</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
