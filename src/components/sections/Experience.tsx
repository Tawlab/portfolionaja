"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, CalendarDays, Building2, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ExperienceItem = {
    id: string;
    type: "internship" | "freelance";
    periodTh: string;
    periodEn: string;
    role: string;
    company?: string;
    descTh: string;
    descEn: string;
    dutiesTh?: string[];
    dutiesEn?: string[];
    tags: string[];
    color: string;
    icon: React.ReactNode;
};

const experiences: ExperienceItem[] = [
    {
        id: "it-support",
        type: "internship",
        periodTh: "1 เม.ย. — 18 ต.ค. 2568",
        periodEn: "Apr 1 — Oct 18, 2025",
        role: "IT Support Help Desk",
        company: "Inherit Co., Ltd. (บริษัท อินเฮอริท จำกัด)",
        descTh: "ฝึกสหกิจศึกษาด้าน IT Support ดูแลและแก้ไขปัญหาด้านเทคโนโลยีสารสนเทศให้กับพนักงานและลูกค้าภายในองค์กร",
        descEn: "Cooperative education in IT Support — maintained and resolved IT issues for employees and clients across the organization.",
        dutiesTh: [
            "รับปัญหาจากผู้ใช้งานภายในองค์กรและดำเนินการแก้ไข",
            "แก้ไขปัญหาเครื่องพิมพ์กระดาษต่อเนื่องเบื้องต้น",
            "ตรวจเช็คและแก้ไขปัญหาโปรแกรมต่างๆ",
            "ให้คำปรึกษาด้าน IT แก่ลูกค้าและพนักงาน",
            "ตรวจเช็คและแก้ไขปัญหาอินเทอร์เน็ตเบื้องต้น",
            "ตรวจเช็คและแก้ไขปัญหาเซิร์ฟเวอร์เบื้องต้น",
            "ตรวจเช็คและแก้ไขปัญหาอีเมลเบื้องต้น",
        ],
        dutiesEn: [
            "Received and resolved IT issues from internal users",
            "Performed basic troubleshooting for continuous-feed printers",
            "Checked and resolved software-related problems",
            "Provided IT consulting to clients and staff",
            "Diagnosed and resolved basic internet connectivity issues",
            "Performed basic server troubleshooting",
            "Diagnosed and resolved basic email issues",
        ],
        tags: ["IT Support", "Help Desk", "Troubleshooting", "Network", "Server"],
        color: "#00D4FF",
        icon: <Briefcase size={20} />,
    },
    {
        id: "programming-intern",
        type: "internship",
        periodTh: "1 พ.ค. — 18 ต.ค. 2568",
        periodEn: "May 1 — Oct 18, 2025",
        role: "Programming (C# MAUI)",
        company: "Inherit Co., Ltd. (บริษัท อินเฮอริท จำกัด)",
        descTh: "ฝึกสหกิจศึกษาด้านการพัฒนาซอฟต์แวร์ รับผิดชอบออกแบบ UX/UI ออกแบบฐานข้อมูล และพัฒนา Frontend ด้วย C# MAUI สำหรับแอปพลิเคชันมือถือ Cross-platform",
        descEn: "Cooperative education in software development — responsible for UX/UI design, database design, and Frontend development using C# .NET MAUI for cross-platform mobile applications.",
        dutiesTh: [
            "ออกแบบ UX/UI สำหรับแอปพลิเคชัน",
            "ออกแบบโครงสร้างฐานข้อมูล",
            "พัฒนา Frontend ด้วย C# .NET MAUI (Cross-platform iOS/Android)",
        ],
        dutiesEn: [
            "Designed UX/UI for the mobile application",
            "Designed the database schema and structure",
            "Developed Frontend with C# .NET MAUI (Cross-platform iOS/Android)",
        ],
        tags: ["C#", ".NET MAUI", "UX/UI Design", "Database Design", "Mobile"],
        color: "#B24BF3",
        icon: <Code2 size={20} />,
    },
    {
        id: "freelance-qs",
        type: "freelance",
        periodTh: "กันยายน 2568",
        periodEn: "September 2025",
        role: "Hospital Queue Booking System",
        descTh: "รับงาน Freelance พัฒนาเว็บแอปพลิเคชันจองคิวโรงพยาบาล ระบบสำหรับจัดการผู้เข้าใช้บริการภายในโรงพยาบาล ช่วยลดความแออัดและเพิ่มความสะดวกให้บุคลากรและผู้ใช้บริการ",
        descEn: "Freelance web application for hospital queue booking — manages patient flow, reduces congestion, and improves service efficiency for both staff and patients.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
        color: "#BAFF29",
        icon: <Globe size={20} />,
    },
    {
        id: "freelance-qd",
        type: "freelance",
        periodTh: "กันยายน 2568",
        periodEn: "September 2025",
        role: "Document Management System",
        descTh: "รับงาน Freelance พัฒนาเว็บแอปพลิเคชันจัดการเอกสารภายในองค์กร ระบบสำหรับจัดการการส่งและรับเอกสาร เพิ่มประสิทธิภาพการทำงานและลดการใช้กระดาษ",
        descEn: "Freelance web application for organizational document management — tracks document sending/receiving, boosts efficiency, and reduces paper use.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
        color: "#FF9900",
        icon: <Globe size={20} />,
    },
];

const typeLabel = {
    th: { internship: "สหกิจ / Internship", freelance: "Freelance" },
    en: { internship: "Internship", freelance: "Freelance" },
};

export default function Experience() {
    const { t, lang } = useLanguage();
    return (
        <section id="experience" className="relative section-padding overflow-hidden">
            <div className="absolute inset-0 mesh-bg pointer-events-none" />

            <div className="relative max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-neon-blue text-sm font-mono tracking-widest uppercase">
                        {t("05. ประสบการณ์", "05. Experience")}
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        Work{" "}
                        <span className="text-gradient-blue-lime">Experience</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                        {t("ประสบการณ์ทำงานและโปรเจกต์ Freelance", "Work experience and freelance projects")}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/40 via-neon-purple/30 to-transparent" />

                    <div className="space-y-8">
                        {experiences.map((exp, i) => {
                            const duties = lang === "th" ? exp.dutiesTh : exp.dutiesEn;
                            const description = lang === "th" ? exp.descTh : exp.descEn;
                            const period = lang === "th" ? exp.periodTh : exp.periodEn;

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12 }}
                                    className="relative pl-14 sm:pl-20"
                                >
                                    {/* Timeline dot */}
                                    <div
                                        className="absolute left-2.5 sm:left-5 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center -translate-x-1/2 z-10"
                                        style={{
                                            background: `${exp.color}22`,
                                            borderColor: exp.color,
                                            boxShadow: `0 0 12px ${exp.color}55`,
                                        }}
                                    >
                                        <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className="glass-card p-5 sm:p-6 hover:bg-white/8 transition-all duration-300"
                                        style={{ borderTop: `2px solid ${exp.color}44` }}
                                    >
                                        {/* Top row */}
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <div className="flex items-center gap-2.5">
                                                <div
                                                    className="p-2 rounded-xl"
                                                    style={{ background: `${exp.color}18`, color: exp.color }}
                                                >
                                                    {exp.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                                                        {exp.role}
                                                    </h3>
                                                    {exp.company && (
                                                        <div className="flex items-center gap-1 mt-0.5">
                                                            <Building2 size={11} className="text-slate-500" />
                                                            <span className="text-slate-400 text-xs">{exp.company}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                                                <span
                                                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                                                    style={{
                                                        background: `${exp.color}15`,
                                                        color: exp.color,
                                                        border: `1px solid ${exp.color}30`,
                                                    }}
                                                >
                                                    {typeLabel[lang][exp.type]}
                                                </span>
                                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                                    <CalendarDays size={11} />
                                                    <span>{period}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div
                                            className="h-px mb-4 rounded-full"
                                            style={{ background: `linear-gradient(to right, ${exp.color}44, transparent)` }}
                                        />

                                        {/* Description */}
                                        <p className="text-slate-300 text-sm leading-relaxed mb-4">{description}</p>

                                        {/* Duties */}
                                        {duties && (
                                            <ul className="space-y-1.5 mb-4">
                                                {duties.map((duty, j) => (
                                                    <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                                                        <span
                                                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                                            style={{ background: exp.color }}
                                                        />
                                                        {duty}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="flex items-center gap-1 text-xs px-2 py-1 rounded-full font-medium"
                                                    style={{
                                                        background: `${exp.color}12`,
                                                        color: exp.color,
                                                        border: `1px solid ${exp.color}25`,
                                                    }}
                                                >
                                                    <Tag size={9} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
