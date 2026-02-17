"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple client-side check for MVP. Use proper Auth for production.
        if (password === "admin123") {
            // Set cookie/localstorage
            localStorage.setItem("admin_auth", "true");
            router.push("/admin/dashboard");
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen bg-brand-black flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-brand-gray/20 border border-white/10 p-8 rounded-lg backdrop-blur-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
                        <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">Вход в Админку</h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            className="w-full bg-brand-black border border-white/20 px-6 py-4 text-white placeholder-brand-silver/30 focus:outline-none focus:border-white transition-colors text-center tracking-widest"
                        />
                        {error && (
                            <p className="text-red-500 text-xs mt-2 text-center uppercase tracking-wider">Неверный пароль</p>
                        )}
                    </div>

                    <Button className="w-full h-14 bg-white text-black hover:bg-brand-silver font-bold uppercase tracking-widest rounded-none">
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    );
}
