import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Adison Sompeng — Portfolio",
    description:
        "Portfolio ของ Adison Sompeng นักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (RMUTT)",
    keywords: [
        "Adison Sompeng",
        "Portfolio",
        "Computer Engineering",
        "RMUTT",
        "Developer",
        "IT Support",
        "Next.js",
    ],
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
    openGraph: {
        title: "Adison Sompeng — Portfolio",
        description: "นักศึกษาวิศวกรรมคอมพิวเตอร์ | Developer | IT Support",
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
                <LanguageProvider>
                    <NavBar />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
