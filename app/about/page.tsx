"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, UserCheck, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 container mx-auto px-4">

                {/* Intro */}
                <section className="text-center mb-16 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 uppercase">О Компании <span className="text-industry-accent">IronForge</span></h1>
                    <p className="text-xl text-industry-500 mb-8 leading-relaxed">
                        Мы работаем в Екатеринбурге с 2005 года. За это время мы прошли путь от небольшой мастерской до крупного подрядчика по монтажу металлоконструкций. Наша миссия — создавать надежные соединения, которые выдержат испытание временем.
                    </p>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    <div className="bg-industry-800 p-6 rounded text-center border-t-4 border-industry-accent">
                        <div className="text-4xl font-bold text-white mb-2">15+</div>
                        <div className="text-sm text-industry-500 uppercase tracking-widest">Лет опыта</div>
                    </div>
                    <div className="bg-industry-800 p-6 rounded text-center border-t-4 border-industry-accent">
                        <div className="text-4xl font-bold text-white mb-2">500+</div>
                        <div className="text-sm text-industry-500 uppercase tracking-widest">Проектов</div>
                    </div>
                    <div className="bg-industry-800 p-6 rounded text-center border-t-4 border-industry-accent">
                        <div className="text-4xl font-bold text-white mb-2">24/7</div>
                        <div className="text-sm text-industry-500 uppercase tracking-widest">Поддержка</div>
                    </div>
                    <div className="bg-industry-800 p-6 rounded text-center border-t-4 border-industry-accent">
                        <div className="text-4xl font-bold text-white mb-2">100%</div>
                        <div className="text-sm text-industry-500 uppercase tracking-widest">Гарантия</div>
                    </div>
                </section>

                {/* Team/Certificates */}
                <section className="mb-24">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="h-1 flex-1 bg-industry-800"></div>
                        <h2 className="text-3xl font-heading font-bold uppercase">Наши Сертификаты</h2>
                        <div className="h-1 flex-1 bg-industry-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-industry-900 border border-industry-700 p-8 rounded-lg flex flex-col items-center text-center">
                            <ShieldCheck className="h-16 w-16 text-industry-accent mb-4" />
                            <h3 className="text-xl font-bold mb-2">НАКС</h3>
                            <p className="text-industry-500">Все сварщики аттестованы Национальным Агентством Контроля Сварки.</p>
                        </div>
                        <div className="bg-industry-900 border border-industry-700 p-8 rounded-lg flex flex-col items-center text-center">
                            <Award className="h-16 w-16 text-industry-accent mb-4" />
                            <h3 className="text-xl font-bold mb-2">ISO 9001</h3>
                            <p className="text-industry-500">Система менеджмента качества соответствует международным стандартам.</p>
                        </div>
                        <div className="bg-industry-900 border border-industry-700 p-8 rounded-lg flex flex-col items-center text-center">
                            <UserCheck className="h-16 w-16 text-industry-accent mb-4" />
                            <h3 className="text-xl font-bold mb-2">Допуск СРО</h3>
                            <p className="text-industry-500">Имеем допуск к работам, влияющим на безопасность капитального строительства.</p>
                        </div>
                    </div>
                </section>

                <div className="text-center">
                    <Link href="/contact"><Button size="lg">Связаться с нами</Button></Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
