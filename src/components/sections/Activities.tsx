"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Languages } from "lucide-react";

/* ── Programming Skills ── */
const programmingSkills = [
    { name: "HTML", level: 90, color: "#E34F26" },
    { name: "CSS", level: 90, color: "#1572B6" },
    { name: "PHP", level: 70, color: "#777BB4" },
    { name: "JavaScript", level: 60, color: "#F7DF1E" },
    { name: "SQL", level: 60, color: "#00D4FF" },
    { name: "Java", level: 40, color: "#F89820" },
    { name: "C#", level: 40, color: "#9B4F96" },
];

/* ── Tools ── */
const tools = [
    { name: "Visual Studio Code", category: "IDE / Editor" },
    { name: "Visual Studio 2022", category: "IDE / Editor" },
    { name: "Microsoft Office", category: "Productivity" },
    { name: "Docker", category: "DevOps" },
    { name: "Antigravity", category: "AI Agent" },
    { name: "Gemini", category: "AI" },
    { name: "ChatGPT", category: "AI" },
    { name: "VNC", category: "Remote" },
    { name: "CapCut", category: "Creative" },
    { name: "Photoshop", category: "Creative" },
];

/* ── Language Skills ── */
const languages = [
    { name: "ภาษาไทย", level: 95, color: "#BAFF29" },
    { name: "English", level: 50, color: "#00D4FF" },
];

/* ── Skill Bar ── */
function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group"
        >
            <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {name}
                </span>
                <span className="text-xs font-mono font-bold" style={{ color }}>
                    {level}%
                </span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: delay + 0.1, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="activities" className="relative section-padding overflow-hidden">
            <div className="absolute inset-0 mesh-bg pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-purple text-sm font-mono tracking-widest uppercase">
                        03. ทักษะ
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        Skills &{" "}
                        <span className="text-gradient-purple-blue">Tools</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                        ภาษาโปรแกรม เครื่องมือ และทักษะที่ใช้ในการพัฒนา
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* ── Left: Programming skills ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-7"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                                <Code2 size={20} className="text-neon-purple" />
                            </div>
                            <h3 className="text-lg font-bold text-white">Programming Languages</h3>
                        </div>

                        <div className="space-y-5">
                            {programmingSkills.map((skill, i) => (
                                <SkillBar key={skill.name} {...skill} delay={i * 0.07} />
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Tools + Language skills ── */}
                    <div className="flex flex-col gap-6">
                        {/* Tools */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-7 flex-1"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-neon-blue/10 border border-neon-blue/20">
                                    <Wrench size={20} className="text-neon-blue" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Tools & Software</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, i) => (
                                    <motion.span
                                        key={tool.name}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.04 }}
                                        whileHover={{ scale: 1.08 }}
                                        className="flex flex-col items-start px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all cursor-default"
                                    >
                                        <span className="text-sm font-medium text-slate-200">{tool.name}</span>
                                        <span className="text-[10px] text-slate-500 mt-0.5">{tool.category}</span>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Language skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-7"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-neon-lime/10 border border-neon-lime/20">
                                    <Languages size={20} className="text-neon-lime" />
                                </div>
                                <h3 className="text-lg font-bold text-white">Language Skills</h3>
                            </div>

                            <div className="space-y-5">
                                {languages.map((lang, i) => (
                                    <SkillBar key={lang.name} {...lang} delay={i * 0.1} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
