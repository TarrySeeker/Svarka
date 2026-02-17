"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminCalculatorForm } from "@/components/admin/AdminCalculatorForm";
import { AdminServiceForm } from "@/components/admin/AdminServiceForm";
import { ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const isAuth = localStorage.getItem("admin_auth");
        if (!isAuth) {
            router.push("/admin");
        } else {
            setAuthorized(true);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("admin_auth");
        router.push("/admin");
    };

    if (!authorized) return null;

    return (
        <div className="min-h-screen bg-brand-black pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-brand-silver hover:text-white transition-colors">
                            <ArrowLeft className="h-6 w-6" />
                        </Link>
                        <h1 className="text-3xl font-heading font-black text-white uppercase">Админ-панель</h1>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleLogout} className="border-white/20 text-brand-silver hover:text-white">
                        <LogOut className="mr-2 h-4 w-4" /> Выход
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Services Column */}
                    <div>
                        <AdminServiceForm />
                    </div>

                    {/* Calculator Column */}
                    <div>
                        <AdminCalculatorForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
