import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ITaw154 — Portfolio | Computer Engineering",
    description:
        "Portfolio ของ ITaw154 นักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT) — Full-stack Developer & IoT Enthusiast",
    keywords: [
        "ITaw154",
        "Portfolio",
        "Computer Engineering",
        "RMUTT",
        "Full-stack Developer",
        "IoT",
        "React",
        "Next.js",
    ],
    openGraph: {
        title: "ITaw154 — Portfolio",
        description: "นักศึกษาวิศวกรรมคอมพิวเตอร์ | Full-stack Developer | IoT Enthusiast",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th" className="dark">
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-dark-bg text-slate-100 min-h-screen`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
