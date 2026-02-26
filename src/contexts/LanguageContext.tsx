"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "th" | "en";

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
    t: (th: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "th",
    toggleLang: () => { },
    t: (th) => th,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("th");

    const toggleLang = () => setLang((prev) => (prev === "th" ? "en" : "th"));

    /** Helper: pick text based on current language */
    const t = (th: string, en: string) => (lang === "th" ? th : en);

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
