"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Star, Award } from "lucide-react";

const projects = [
    {
        id: "mindtalk",
        emoji: "🧠",
        title: "MindTalk",
        subtitle: "Mental Health Chatbot",
        short: "ระบบ Chatbot ด้านสุขภาพจิตที่ช่วยให้ผู้ใช้สามารถพูดคุยและรับคำแนะนำ",
        description:
            "พัฒนาระบบ Chatbot ด้านสุขภาพจิตโดยใช้ PHP และ MySQL เป็น Backend มี AI-powered responses ที่ช่วยวิเคราะห์อารมณ์และให้คำแนะนำเบื้องต้น มี Dashboard สำหรับนักจิตวิทยาในการติดตามผู้ใช้ รองรับการใช้งานผ่าน Web Browser",
        tags: ["PHP", "MySQL", "JavaScript", "AI/NLP", "HTML/CSS"],
        tagColors: ["neon-blue", "neon-lime", "neon-purple"],
        color: "#00D4FF",
        role: "Full-stack Developer",
        type: "Web Application",
        status: "Completed",
    },
    {
        id: "wheel2share",
        emoji: "🛵",
        title: "Wheel2Share",
        subtitle: "Vehicle Rental App",
        short: "แอปพลิเคชันมือถือสำหรับให้เช่ายานพาหนะแบบ P2P",
        description:
            "แอปพลิเคชันมือถือสำหรับให้เช่ายานพาหนะแบบ Peer-to-Peer พัฒนาด้วย .NET MAUI และ C# สำหรับ Cross-platform (iOS/Android) เชื่อมต่อกับ REST API Backend มีระบบ Authentication, การจัดการการจอง, ระบบรีวิว และการชำระเงิน",
        tags: [".NET MAUI", "C#", "REST API", "SQL Server", "XAML"],
        tagColors: ["neon-purple", "neon-blue", "neon-lime"],
        color: "#BAFF29",
        role: "Mobile Developer",
        type: "Mobile Application",
        status: "In Progress",
    },
    {
        id: "queue-doc",
        emoji: "📋",
        title: "Queue & Document Management",
        subtitle: "ระบบจัดการคิวและเอกสาร",
        short: "ระบบจัดการคิวและเอกสารสำหรับองค์กร ลดการใช้กระดาษและเพิ่มประสิทธิภาพ",
        description:
            "ระบบจัดการคิวและเอกสารออนไลน์สำหรับองค์กร พัฒนาด้วย PHP และ MySQL ช่วยลดการใช้กระดาษและเพิ่มประสิทธิภาพการทำงาน มีระบบแจ้งเตือนผ่าน SMS/Email, Dashboard แบบ Real-time และรองรับการ Export ไฟล์ PDF",
        tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PDF"],
        tagColors: ["neon-blue", "neon-lime", "neon-purple"],
        color: "#B24BF3",
        role: "Full-stack Developer",
        type: "Web Application",
        status: "Completed",
    },
];

const tagColorMap: Record<string, string> = {
    "neon-blue": "tag",
    "neon-lime": "tag-lime",
    "neon-purple": "tag-purple",
};

export default function Works() {
    const [selected, setSelected] = useState<string | null>(null);
    const selectedProject = projects.find((p) => p.id === selected);

    return (
        <section id="works" className="relative section-padding overflow-hidden">
            <div className="absolute inset-0 mesh-bg pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">
                        04. ผลงาน
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        Works &{" "}
                        <span className="text-gradient-blue-lime">Projects</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                        โปรเจกต์ที่ผมภูมิใจในการพัฒนา — คลิกเพื่อดูรายละเอียด
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => setSelected(project.id)}
                            className="glass-card p-6 cursor-pointer group relative overflow-hidden"
                            style={{ borderTop: `2px solid ${project.color}44` }}
                        >
                            {/* Status pill */}
                            <div className="absolute top-4 right-4">
                                <span
                                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                                    style={{
                                        background: `${project.color}15`,
                                        color: project.color,
                                        border: `1px solid ${project.color}30`,
                                    }}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Emoji */}
                            <div className="text-5xl mb-4">{project.emoji}</div>

                            {/* Title */}
                            <h3 className="text-xl font-black text-white group-hover:text-neon-blue transition-colors mb-1">
                                {project.title}
                            </h3>
                            <p
                                className="text-sm font-medium mb-3"
                                style={{ color: project.color }}
                            >
                                {project.subtitle}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                {project.short}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="tag text-xs">
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="text-xs px-2 py-0.5 rounded-full text-slate-500 bg-white/5">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{
                                    background: `radial-gradient(ellipse at top left, ${project.color}08, transparent 60%)`,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Certificates banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 border border-neon-lime/20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Award className="text-neon-lime" size={24} />
                        <h3 className="text-xl font-bold text-white">
                            ใบรับรอง & <span className="text-neon-lime">Certificates</span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", icon: "☁️" },
                            { name: "Introduction to IoT & Embedded Systems", org: "Coursera", icon: "📡" },
                            { name: "Programming with C#", org: "Microsoft Learn", icon: "🔷" },
                        ].map((cert) => (
                            <div
                                key={cert.name}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-neon-lime/20 transition-colors"
                            >
                                <span className="text-2xl">{cert.icon}</span>
                                <div>
                                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                                    <p className="text-slate-500 text-xs mt-1">{cert.org}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {selected && selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                layoutId={`project-${selected}`}
                                className="glass-card w-full max-w-lg p-8 relative"
                                style={{
                                    borderTop: `2px solid ${selectedProject.color}66`,
                                    boxShadow: `0 0 80px ${selectedProject.color}22`,
                                }}
                            >
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                                >
                                    <X size={18} />
                                </button>

                                <div className="text-5xl mb-4">{selectedProject.emoji}</div>
                                <h3 className="text-2xl font-black text-white mb-1">
                                    {selectedProject.title}
                                </h3>
                                <p
                                    className="text-sm font-semibold mb-4"
                                    style={{ color: selectedProject.color }}
                                >
                                    {selectedProject.subtitle}
                                </p>

                                {/* Meta info */}
                                <div className="flex gap-3 mb-5">
                                    <span className="tag text-xs">{selectedProject.type}</span>
                                    <span className="tag text-xs">{selectedProject.role}</span>
                                </div>

                                <div
                                    className="h-px mb-5 rounded-full"
                                    style={{
                                        background: `linear-gradient(to right, ${selectedProject.color}66, transparent)`,
                                    }}
                                />

                                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="tag text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-slate-300">
                                        <Github size={14} /> Source Code
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
