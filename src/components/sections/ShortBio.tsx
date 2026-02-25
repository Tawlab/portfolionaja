"use client";

import { motion } from "framer-motion";
import {
    GraduationCap, Code2, Wrench, Languages,
    Cloud, Smartphone, Globe, Monitor, Cpu, BookOpen
} from "lucide-react";

const bioCards = [
    {
        id: "education",
        icon: <GraduationCap size={22} />,
        title: "การศึกษา",
        subtitle: "Education",
        color: "neon-blue",
        colorHex: "#00D4FF",
        items: [
            "🎓 วิศวกรรมคอมพิวเตอร์ (B.Eng.)",
            "🏫 มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT)",
            "📍 ปทุมธานี, ประเทศไทย",
        ],
        span: "col-span-1 lg:col-span-2",
    },
    {
        id: "skills",
        icon: <Code2 size={22} />,
        title: "ทักษะการพัฒนา",
        subtitle: "Development Skills",
        color: "neon-lime",
        colorHex: "#BAFF29",
        items: [
            "📱 Mobile: .NET MAUI, C#, Flutter",
            "🌐 Web: PHP, HTML/CSS, JavaScript, Bootstrap",
            "🗄️ Database: MySQL",
        ],
        span: "col-span-1",
    },
    {
        id: "tools",
        icon: <Wrench size={22} />,
        title: "เครื่องมือ",
        subtitle: "Tools & Technologies",
        color: "neon-purple",
        colorHex: "#B24BF3",
        items: [
            "🐳 Docker & Container",
            "📡 ESP32 / IoT",
            "🔧 Git & GitHub",
            "✏️ VS Code, Visual Studio",
        ],
        span: "col-span-1",
    },
    {
        id: "languages",
        icon: <Languages size={22} />,
        title: "ภาษา",
        subtitle: "Languages",
        color: "neon-blue",
        colorHex: "#00D4FF",
        items: [
            "🇹🇭 ภาษาไทย (เจ้าของภาษา)",
            "🇺🇸 English ",
        ],
        span: "col-span-1",
    },
];

export default function ShortBio() {
    return (
        <section id="shortbio" className="relative section-padding overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-lime text-sm font-mono tracking-widest uppercase">
                        02. ประวัติย่อ
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        Short <span className="text-gradient-blue-lime">Bio</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                        สรุปประวัติและทักษะของผมในรูปแบบที่อ่านง่าย
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bioCards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className={`glass-card p-6 group cursor-default ${card.span === "col-span-1 lg:col-span-2" ? "md:col-span-2 lg:col-span-2" : ""}`}
                            style={{
                                borderTop: `2px solid ${card.colorHex}33`,
                            }}
                        >
                            {/* Icon + Title */}
                            <div className="flex items-start gap-3 mb-5">
                                <div
                                    className="p-2.5 rounded-xl"
                                    style={{ background: `${card.colorHex}15`, color: card.colorHex }}
                                >
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base">{card.title}</h3>
                                    <p className="text-xs text-slate-500 font-mono">{card.subtitle}</p>
                                </div>
                            </div>

                            {/* Accent line */}
                            <div
                                className="h-px mb-4 rounded-full"
                                style={{
                                    background: `linear-gradient(to right, ${card.colorHex}44, transparent)`,
                                }}
                            />

                            {/* Items */}
                            <ul className="space-y-2.5">
                                {card.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="text-slate-300 text-sm flex items-start gap-2 leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Hover glow effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(ellipse at top left, ${card.colorHex}08, transparent 60%)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
