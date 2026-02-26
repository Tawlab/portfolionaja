"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Award, ImageIcon } from "lucide-react";

/* ── Projects ── */
const projects = [
    {
        id: "mbs",
        image: "/images/projects/MBS.png",
        title: "MBS",
        subtitle: "Mobile Shop Management System",
        short: "ระบบบริหารจัดการร้านจำหน่ายมือถือ ครอบคลุมการขาย การซ่อม และคลังสินค้า (โปรเจกต์จบ ป.ตรี)",
        description:
            "ระบบบริหารจัดการร้านจำหน่ายมือถือสำหรับโปรเจกต์จบระดับปริญญาตรี พัฒนาด้วย PHP, HTML, CSS, JavaScript และ Bootstrap รองรับการจัดการข้อมูลอย่างยืดหยุ่น ฟีเจอร์หลักประกอบด้วยระบบจัดการข้อมูลการขาย ระบบซ่อม ระบบบริหารคลังสินค้า (รับเข้า–นำออก) การสร้าง QR Code ด้วย PHP Library และการแจ้งเตือนผ่านอีเมลด้วย PHPMailer",
        tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "PHPMailer", "QR Code"],
        color: "#BAFF29",
        role: "Full-stack Developer",
        type: "Senior Project",
        status: "Completed",
    },
    {
        id: "qd",
        image: "/images/projects/QD.png",
        title: "QD",
        subtitle: "Document Management System",
        short: "ระบบจัดการเอกสารภายในองค์กร เพื่อเก็บประวัติและติดตามเอกสาร (Freelance)",
        description:
            "ระบบจัดการเอกสารภายในองค์กรในรูปแบบ Freelance ช่วยให้บุคลากรสามารถเก็บประวัติและติดตามสถานะเอกสารได้อย่างมีประสิทธิภาพ ลดการใช้กระดาษและเพิ่มความสะดวกในการค้นหา พร้อมระบบแจ้งเตือนผ่านอีเมลด้วย PHPMailer พัฒนาด้วย PHP, HTML, CSS, JavaScript และ Bootstrap",
        tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "PHPMailer"],
        color: "#00D4FF",
        role: "Full-stack Developer",
        type: "Freelance",
        status: "Completed",
    },
    {
        id: "qs",
        image: "/images/projects/QS.png",
        title: "QS",
        subtitle: "Hospital Queue Booking System",
        short: "ระบบจองคิวโรงพยาบาล เพื่อความสะดวกของผู้ใช้และบุคลากร (Freelance)",
        description:
            "ระบบจองคิวเข้าใช้บริการภายในโรงพยาบาลในรูปแบบ Freelance ผู้ใช้สามารถจองคิวล่วงหน้าและบุคลากรสามารถติดตามและจัดการคิวได้แบบ Real-time ช่วยลดความแออัดและเพิ่มประสิทธิภาพการให้บริการ มีระบบเก็บประวัติการเข้าใช้บริการ พัฒนาด้วย PHP, HTML, CSS, JavaScript และ Bootstrap",
        tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap"],
        color: "#B24BF3",
        role: "Full-stack Developer",
        type: "Freelance",
        status: "Completed",
    },
];

/* ── Certificates ── */
const certificates = [
    {
        id: "gcdp1",
        image: "/images/certificates/GCDP_1_Cer.png",
        name: "Global Capstone Design Project (GCDP) — Thailand",
        org: "คณะวิศวกรรมศาสตร์ มทร.ธัญบุรี (RMUTT) × International University",
        color: "#00D4FF",
    },
    {
        id: "gcdp2",
        image: "/images/certificates/GCDP_2_Cer.png",
        name: "Global Capstone Design Project (GCDP) — South Korea",
        org: "คณะวิศวกรรมศาสตร์ มทร.ธัญบุรี (RMUTT) × International University",
        color: "#BAFF29",
    },
    {
        id: "html-cer",
        image: "/images/certificates/HTML_Cer.png",
        name: "HTML Certificate",
        org: "Sololearn",
        color: "#E34F26",
    },
    {
        id: "copilot",
        image: "/images/certificates/Copilot_Cer.png",
        name: "AI Copilot — Effective AI Usage Workshop",
        org: "อบรมการใช้งาน AI อย่างมีประสิทธิภาพ",
        color: "#B24BF3",
    },
];

/* ── Helpers ── */
function ProjectImage({ src, alt, color }: { src: string; alt: string; color: string }) {
    return (
        <div
            className="relative w-full h-32 sm:h-40 rounded-xl overflow-hidden mb-4"
            style={{ background: `${color}10`, border: `1px solid ${color}20` }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    );
}

function CertImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div
            className="relative flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: 72, height: 72, background: "#ffffff08", border: "1px solid #ffffff15" }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain p-1.5"
            />
        </div>
    );
}

/* ── Main Component ── */
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

                            <ProjectImage src={project.image} alt={project.title} color={project.color} />

                            <h3 className="text-xl font-black text-white group-hover:text-neon-blue transition-colors mb-1">
                                {project.title}
                            </h3>
                            <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                                {project.subtitle}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.short}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span key={tag} className="tag text-xs">{tag}</span>
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
                                style={{ background: `radial-gradient(ellipse at top left, ${project.color}08, transparent 60%)` }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Certificates */}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-neon-lime/20 transition-colors"
                            >
                                <CertImage src={cert.image} alt={cert.name} />
                                <div>
                                    <p className="text-white text-sm font-semibold leading-snug">{cert.name}</p>
                                    <p className="text-slate-500 text-xs mt-1">{cert.org}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
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
                                className="glass-card w-full max-w-lg p-6 sm:p-8 relative overflow-y-auto max-h-[85vh]"
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

                                <ProjectImage
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    color={selectedProject.color}
                                />

                                <h3 className="text-2xl font-black text-white mb-1">{selectedProject.title}</h3>
                                <p className="text-sm font-semibold mb-4" style={{ color: selectedProject.color }}>
                                    {selectedProject.subtitle}
                                </p>

                                <div className="flex gap-3 mb-5">
                                    <span className="tag text-xs">{selectedProject.type}</span>
                                    <span className="tag text-xs">{selectedProject.role}</span>
                                </div>

                                <div
                                    className="h-px mb-5 rounded-full"
                                    style={{ background: `linear-gradient(to right, ${selectedProject.color}66, transparent)` }}
                                />

                                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="tag text-xs">{tag}</span>
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
