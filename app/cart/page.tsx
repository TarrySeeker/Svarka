"use client";

import { useCart } from "@/lib/store";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Trash2, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
    const { items, removeItem, clearCart } = useCart();
    const [mounted, setMounted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const total = items.reduce((acc, item) => {
        return typeof item.price === "number" ? acc + item.price : acc;
    }, 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            clearCart();
        }, 2000);
    };

    if (!mounted) return null;

    if (isSubmitted) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 flex flex-col items-center justify-center p-4">
                    <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                        <div className="inline-flex p-4 rounded-full bg-industry-accent/20 text-industry-accent mb-4">
                            <CheckCircle className="h-16 w-16" />
                        </div>
                        <h1 className="text-4xl font-heading font-black uppercase">Заявка отправлена!</h1>
                        <p className="text-industry-500 max-w-md mx-auto">
                            Спасибо за обращение. Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей.
                        </p>
                        <Link href="/">
                            <Button className="mt-8">Вернуться на главную</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 pt-32 pb-12 container mx-auto px-4">
                <h1 className="text-3xl font-heading font-black mb-8 uppercase">Ваша заявка</h1>

                {items.length === 0 ? (
                    <div className="text-center py-24 space-y-4 border border-dashed border-industry-700 rounded-lg">
                        <p className="text-industry-500 text-xl">В корзине пусто</p>
                        <Link href="/services">
                            <Button>Перейти к услугам</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4 gap-4">
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-sm text-industry-500">{item.details}</p>
                                    </div>
                                    <div className="font-mono font-bold text-industry-accent text-xl">
                                        {typeof item.price === "number"
                                            ? `${item.price.toLocaleString('ru-RU')} ₽`
                                            : item.price}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </Button>
                                </Card>
                            ))}
                        </div>

                        {/* Checkout Form */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-24">
                                <CardHeader>
                                    <CardTitle>Оформление</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between items-center text-lg font-bold border-b border-industry-700 pb-4">
                                        <span>Итого (примерно):</span>
                                        <span className="text-industry-accent">{total.toLocaleString('ru-RU')} ₽</span>
                                    </div>
                                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Ваше имя</label>
                                            <input required type="text" className="w-full bg-industry-900 border border-industry-600 rounded p-2" placeholder="Иван Иванов" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Телефон</label>
                                            <input required type="tel" className="w-full bg-industry-900 border border-industry-600 rounded p-2" placeholder="+7 (999) 000-00-00" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Комментарий</label>
                                            <textarea className="w-full bg-industry-900 border border-industry-600 rounded p-2" rows={3} placeholder="Адрес объекта, сроки..."></textarea>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" form="checkout-form" className="w-full" size="lg" variant="neon">
                                        Отправить заявку <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>

                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
