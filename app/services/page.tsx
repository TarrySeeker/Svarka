
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/lib/supabaseClient";
import { ServiceCard, Service } from "@/components/features/ServiceCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

// This is a Server Component by default (no "use client")
// Data fetching happens on the server, producing HTML with data.
export const revalidate = 0; // Disable cache to ensure fresh data (optional, or use revalidatePath)

export default async function ServicesPage() {

    // Fetch data directly from Supabase
    const { data: servicesData, error } = await supabase
        .from('services')
        .select('*')
        .order('id', { ascending: true });

    if (error) {
        console.error("Supabase Error:", error);
    }

    // Transform/Cast data if necessary
    const services: Service[] = (servicesData || []).map((s: any) => ({
        ...s,
        features: s.features || ["Гарантия качества", "Сертифицированные материалы"]
    }));

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 pt-32 pb-12 container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground uppercase">
                        Наши <span className="text-industry-accent">Услуги</span>
                    </h1>
                    <p className="text-industry-500 max-w-2xl mx-auto">
                        От промышленных трубопроводов до художественной ковки. Мы гарантируем качество каждого шва.
                    </p>
                </div>

                {services.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-industry-700 rounded-lg">
                        <p className="text-xl text-industry-500 mb-4">Услуги пока не добавлены.</p>
                        <p className="text-sm text-industry-600">
                            Перейдите в <Link href="/admin" className="text-industry-accent hover:underline">Админ-панель</Link>, чтобы добавить первую услугу.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
