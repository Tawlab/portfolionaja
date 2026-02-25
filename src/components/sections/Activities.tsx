"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ImageIcon } from "lucide-react";

const activities = [
    {
        id: "aws-workshop",
        image: "/images/activities/aws-workshop.png",
        title: "AWS Cloud Workshop",
        short: "เข้าร่วม Workshop ด้าน AWS Cloud Computing",
        description:
            "เข้าร่วม Workshop ด้าน AWS Cloud Computing ที่จัดโดยทางมหาวิทยาลัย เรียนรู้เกี่ยวกับ EC2, S3, Lambda และ RDS การ Deploy Application บน Cloud และการจัดการ Infrastructure แบบ Modern",
        tags: ["AWS", "Cloud", "EC2", "S3"],
        color: "#FF9900",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
    },
    {
        id: "hackathon",
        image: "/images/activities/hackathon.png",
        title: "University Hackathon",
        short: "ร่วมแข่งขัน Hackathon ระดับมหาวิทยาลัย",
        description:
            "เข้าร่วมการแข่งขัน Hackathon ระดับมหาวิทยาลัย พัฒนา Project ด้าน Healthcare Technology ภายใน 24 ชั่วโมง ได้รับประสบการณ์การทำงานเป็น Team และการ Pitch ไอเดียต่อหน้า Judges",
        tags: ["Team Work", "Innovation", "Pitch"],
        color: "#00D4FF",
        bg: "bg-neon-blue/10",
        border: "border-neon-blue/20",
    },
    {
        id: "fitness",
        image: "/images/activities/fitness.png",
        title: "Fitness & Wellness",
        short: "กิจวัตรออกกำลังกายและดูแลสุขภาพ",
        description:
            "มีความสนใจในด้านฟิตเนสและสุขภาพ ออกกำลังกายสม่ำเสมอ เชื่อว่าร่างกายและจิตใจที่แข็งแกร่งส่งผลโดยตรงต่อประสิทธิภาพในการเขียนโค้ดและความคิดสร้างสรรค์",
        tags: ["Fitness", "Health", "Lifestyle"],
        color: "#BAFF29",
        bg: "bg-neon-lime/10",
        border: "border-neon-lime/20",
    },
    {
        id: "japanese",
        image: "/images/activities/japanese.png",
        title: "Japanese Study",
        short: "เรียนภาษาญี่ปุ่นด้วยตัวเอง",
        description:
            "เรียนภาษาญี่ปุ่นด้วยตัวเองผ่าน Apps และหนังสือ ปัจจุบันอยู่ในระดับ N5 ใช้ Anime และ Manga เป็นสื่อในการเรียนรู้ มีแผนเดินทางไปญี่ปุ่นและสอบ JLPT ในอนาคต",
        tags: ["JLPT N5", "Self-study", "Japanese"],
        color: "#FF6B6B",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
    },
    {
        id: "minecraft",
        image: "/images/activities/minecraft.png",
        title: "Minecraft Server Admin",
        short: "บริหารและพัฒนา Minecraft Server",
        description:
            "บริหาร Minecraft Server สำหรับกลุ่มเพื่อน จัดการ Server Configuration, Plugin Development และ Server Optimization เป็นจุดเริ่มต้นที่ทำให้สนใจด้าน Server Administration และ DevOps",
        tags: ["Server Admin", "Java", "DevOps"],
        color: "#8B5CF6",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        id: "student-club",
        image: "/images/activities/student-club.png",
        title: "Student Club",
        short: "ชมรมนักศึกษาวิศวกรรมคอมพิวเตอร์",
        description:
            "เป็นสมาชิกชมรมนักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี ร่วมจัดกิจกรรม Workshop และ Seminar ให้กับน้องๆ นักศึกษาปีหนึ่ง",
        tags: ["RMUTT", "Leadership", "Teaching"],
        color: "#BAFF29",
        bg: "bg-neon-lime/10",
        border: "border-neon-lime/20",
    },
];

/** แสดงรูปภาพ หรือ placeholder ถ้ายังไม่มีไฟล์ */
function ActivityImage({
    src,
    alt,
    size = "card",
    color,
}: {
    src: string;
    alt: string;
    size?: "card" | "modal";
    color: string;
}) {
    const dim = size === "card" ? 64 : 96;

    return (
        <div
            className="relative flex-shrink-0 rounded-2xl overflow-hidden"
            style={{
                width: dim,
                height: dim,
                background: `${color}15`,
                border: `1px solid ${color}30`,
            }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                onError={(e) => {
                    // ถ้าไม่มีรูป ซ่อน img แล้วแสดง fallback
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                        const fb = parent.querySelector(".img-fallback") as HTMLElement | null;
                        if (fb) fb.style.display = "flex";
                    }
                }}
            />
            {/* Fallback placeholder */}
            <div
                className="img-fallback absolute inset-0 flex-col items-center justify-center gap-1 text-center p-2"
                style={{ display: "flex", color: color }}
            >
                <ImageIcon size={size === "card" ? 20 : 28} strokeWidth={1.5} />
                <span className="text-xs opacity-60 leading-tight">รอรูปภาพ</span>
            </div>
        </div>
    );
}

export default function Activities() {
    const [selected, setSelected] = useState<string | null>(null);
    const selectedActivity = activities.find((a) => a.id === selected);

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
                        03. กิจกรรม
                    </span>
                    <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
                        Activities &{" "}
                        <span className="text-gradient-purple-blue">Interests</span>
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                        คลิกที่การ์ดเพื่อดูรายละเอียดเพิ่มเติม
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activities.map((activity, i) => (
                        <motion.div
                            key={activity.id}
                            layoutId={`card-${activity.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            onClick={() => setSelected(activity.id)}
                            className={`glass-card p-6 cursor-pointer group border ${activity.border} hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300`}
                        >
                            {/* Image */}
                            <div className="mb-4">
                                <ActivityImage
                                    src={activity.image}
                                    alt={activity.title}
                                    size="card"
                                    color={activity.color}
                                />
                            </div>

                            <h3 className="font-bold text-white text-lg mb-2 group-hover:text-neon-blue transition-colors">
                                {activity.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{activity.short}</p>
                            <div className="flex flex-wrap gap-2">
                                {activity.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 rounded-full font-medium"
                                        style={{
                                            background: `${activity.color}15`,
                                            color: activity.color,
                                            border: `1px solid ${activity.color}30`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div
                                className="mt-4 flex items-center gap-1 text-xs font-medium"
                                style={{ color: activity.color }}
                            >
                                อ่านเพิ่มเติม <ChevronRight size={12} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {selected && selectedActivity && (
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
                                layoutId={`card-${selected}`}
                                className="glass-card w-full max-w-lg p-8 relative"
                                style={{
                                    borderTop: `2px solid ${selectedActivity.color}66`,
                                    boxShadow: `0 0 60px ${selectedActivity.color}22`,
                                }}
                            >
                                {/* Close */}
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                                >
                                    <X size={18} />
                                </button>

                                {/* Modal image */}
                                <div className="mb-5">
                                    <ActivityImage
                                        src={selectedActivity.image}
                                        alt={selectedActivity.title}
                                        size="modal"
                                        color={selectedActivity.color}
                                    />
                                </div>

                                <h3 className="text-2xl font-black text-white mb-3">
                                    {selectedActivity.title}
                                </h3>

                                <div
                                    className="h-0.5 mb-5 rounded-full"
                                    style={{
                                        background: `linear-gradient(to right, ${selectedActivity.color}66, transparent)`,
                                    }}
                                />

                                <p className="text-slate-300 leading-relaxed text-base mb-6">
                                    {selectedActivity.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {selectedActivity.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm px-3 py-1 rounded-full font-medium"
                                            style={{
                                                background: `${selectedActivity.color}15`,
                                                color: selectedActivity.color,
                                                border: `1px solid ${selectedActivity.color}30`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
