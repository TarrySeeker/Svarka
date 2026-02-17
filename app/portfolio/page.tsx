"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder data - in a real app this might come from Supabase too
const projects = [
    {
        id: 1,
        title: "Промышленный трубопровод",
        description: "Монтаж системы высокого давления для химического завода. 500+ стыков, 100% рентген-контроль.",
        before: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", // Placeholder
        after: "https://images.unsplash.com/photo-1565610220671-5544439c0f09?q=80&w=1964&auto=format&fit=crop", // Placeholder
    },
    {
        id: 2,
        title: "Несущие конструкции склада",
        description: "Изготовление и монтаж ферм перекрытия. Общий вес металлоконструкций - 45 тонн.",
        before: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1542466034-099525c317ac?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Реставрация ковша экскаватора",
        description: "Восстановление геометрии и наплавка износостойкого слоя Hardox.",
        before: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1538356396956-613d5b00c309?q=80&w=2070&auto=format&fit=crop",
    }
];

export default function PortfolioPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-12 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-heading font-black text-center mb-12 uppercase">
                    Наши <span className="text-industry-accent">Работы</span>
                </h1>

                <div className="relative max-w-5xl mx-auto bg-industry-900 border border-industry-800 rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex"
                            >
                                {/* Split View Simulation */}
                                <div className="w-1/2 relative bg-industry-800 border-r-2 border-industry-accent z-10">
                                    <img src={projects[currentIndex].before} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" alt="До" />
                                    <span className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 text-xs font-bold uppercase">До</span>
                                </div>
                                <div className="w-1/2 relative bg-industry-800">
                                    <img src={projects[currentIndex].after} className="object-cover w-full h-full" alt="После" />
                                    <span className="absolute top-4 right-4 bg-industry-accent text-black px-2 py-1 text-xs font-bold uppercase">После</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="p-8 border-t border-industry-800 bg-industry-800/30 backdrop-blur">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-heading font-bold text-industry-accent mb-2">{projects[currentIndex].title}</h2>
                                <p className="text-industry-500 max-w-xl">{projects[currentIndex].description}</p>
                            </div>
                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" onClick={prevProject}>
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" onClick={nextProject}>
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 gap-2">
                            {projects.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? "w-8 bg-industry-accent" : "w-2 bg-industry-600"}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
