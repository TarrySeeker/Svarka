"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";

export default function BookingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container mx-auto px-4 pt-32 pb-24 flex items-center justify-center">
                <Card className="max-w-md w-full text-center p-8 bg-industry-800">
                    <CardHeader>
                        <CardTitle className="text-3xl font-heading text-industry-accent mb-4">Начать проект</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-industry-500">
                            Используйте наш калькулятор для предварительной оценки или свяжитесь с менеджером напрямую для сложных проектов.
                        </p>
                        <div className="flex flex-col gap-4">
                            <Link href="/calculator">
                                <Button className="w-full" variant="neon">Онлайн Калькулятор</Button>
                            </Link>
                            <Link href="/contact">
                                <Button className="w-full" variant="outline">Написать нам</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    )
}
