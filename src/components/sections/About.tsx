"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Heart, Coffee } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const interests = [
    { emoji: "💻", label: "การเขียนโปรแกรม", color: "text-neon-blue" },
    { emoji: "🛠️", label: "ฮาร์ดแวร์", color: "text-neon-lime" },
    { emoji: "🏋️", label: "การออกกำลังกาย", color: "text-neon-lime" },
    { emoji: "🇺🇸", label: "เรียนรู้ภาษาอังกฤษ", color: "text-yellow-400" },
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
    const { t } = useLanguage();
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
                        {t("01. เกี่ยวกับผม", "01. About Me")}
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        {t("เกี่ยวกับ", "About")} <span className="text-gradient-blue-lime">Me</span>
                    </h2>
                </motion.div>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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
                            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 glass-card overflow-hidden flex items-center justify-center">
                                {/* Background gradient */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #0D1117 0%, #0A1628 40%, #00D4FF11 100%)",
                                    }}
                                />
                                {/* Profile image */}
                                <div className="relative z-10 w-full h-full">
                                    <Image
                                        src="/images/aboutme/profile/profile.png"
                                        alt="Adison Sompeng"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>

                                {/* Glow effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-neon-blue/10 to-transparent pointer-events-none" />
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
                                {t("สวัสดีครับ ผมอดิศร สมเป็ง", "Hi, I'm Adison Sompeng")}
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-base">
                                {t(
                                    "ผมเป็นนักศึกษาสาขา",
                                    "I'm a"
                                )}{" "}
                                <span className="text-neon-blue font-semibold">
                                    {t("วิศวกรรมคอมพิวเตอร์", "Computer Engineering")}
                                </span>{" "}
                                {t(
                                    "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT) ปทุมธานี มีความหลงใหลในการพัฒนาซอฟต์แวร์และฮาร์ดแวร์",
                                    "student at Rajamangala University of Technology Thanyaburi (RMUTT), Pathum Thani, passionate about software and hardware development."
                                )}
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
                                {t(
                                    "ผมเป็นคนมีบุคลิกนิ่งๆ จริงจังกับการทำงาน ชอบการลงมือทำ มีความสามารถในการบริหารจัดการงานและเวลา ชอบออกกำลังกาย ทัศนคติเชิงบวก ชอบเรียนรู้สิ่งใหม่และท้าทาย สามารถทำงานเป็นทีมและพร้อมปรับตัวต่อสถานการณ์ต่างๆ เสมอ มีความอดทนต่องานและแรงกดดันได้ดี",
                                    "I have a calm, focused personality. I enjoy hands-on work, am good at time management, love exercising, stay positive, and love learning new challenges. I work well in teams, adapt easily, and handle pressure well."
                                )}
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
                                <span className="text-slate-400 text-sm font-medium">{t("ความสนใจ / Interests", "Interests")}</span>
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
                                {t("ปัจจุบันกำลังศึกษาและพัฒนาตัวเองในด้าน", "Currently studying and developing skills in")}{" "}
                                <span className="text-neon-blue font-semibold">Programming &amp; Hardware</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
