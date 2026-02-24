"use client";

import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle2, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ServiceModal } from "@/components/features/ServiceModal";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [services, setServices] = useState<any[]>([]);
  const [homeHero, setHomeHero] = useState<any>({
    title: "ПРОМЫШЛЕННАЯ СВАРКА",
    subtitle: "Мы создаем прочные связи. Промышленные сварочные решения премиум-класса для сложных архитектурных и инженерных проектов.",
    buttonText: "Наши услуги"
  });

  useEffect(() => {
    async function fetchData() {
      const [servicesRes, contentRes] = await Promise.all([
        supabase.from('services').select('*').order('id', { ascending: true }),
        supabase.from('cms_content').select('*').eq('key', 'home_hero')
      ]);

      if (servicesRes.data) setServices(servicesRes.data);
      if (contentRes.data && contentRes.data.length > 0) {
        setHomeHero((prev: any) => ({ ...prev, ...contentRes.data[0].content }));
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-white selection:bg-white selection:text-black">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-brand-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial Background"
              className="w-full h-full object-cover grayscale contrast-125 scale-105 animate-[scaleIn_20s_infinite_alternate]"
            />
          </div>

          <div className="container relative z-20 px-4 text-center">
            <div className="inline-block mb-6 animate-[fadeInUp_0.8s_ease-out]">
              <span className="py-2 px-4 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                Industrial Excellence
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-white uppercase mb-8 leading-[0.9] drop-shadow-2xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              {homeHero.title.split(' ')[0] || "ПРОМЫШЛЕННАЯ"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-brand-silver">
                {homeHero.title.split(' ').slice(1).join(' ') || "СВАРКА"}
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-lg md:text-xl text-brand-silver font-light mb-12 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              {homeHero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto h-14 bg-white text-black hover:bg-brand-silver hover:text-black rounded-none uppercase tracking-widest font-bold px-8">
                  {homeHero.buttonText}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 border-white text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest font-bold px-8">
                  Связаться
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-pulse">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* Marquee / Ticker */}
        <div className="bg-white text-black overflow-hidden py-4 border-y border-brand-gray">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="text-4xl font-heading font-bold uppercase mx-8 tracking-tighter flex items-center">
                TIG Welding <span className="mx-4 text-xs align-middle">●</span>
                Structural Steel <span className="mx-4 text-xs align-middle">●</span>
                Custom Fabrication <span className="mx-4 text-xs align-middle">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Services Grid (Interactive) - MOVED UP */}
        <section className="py-32 bg-brand-dark border-t border-white/5" id="services">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">Услуги</h2>
                <p className="text-brand-silver max-w-md">Полный спектр работ любой сложности.</p>
              </div>
              <Link href="/services" className="hidden md:block">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none uppercase">Все услуги</Button>
              </Link>
            </div>

            {services.length === 0 ? (
              <div className="text-center py-20 text-brand-silver uppercase tracking-widest">Загрузка услуг...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {services.slice(0, 6).map((service, index) => (
                  <div
                    key={service.id}
                    className="group relative h-96 overflow-hidden bg-brand-black border border-white/5 cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2 border-l-2 border-white/20 pl-2">
                          {service.category}
                        </p>
                        <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-100">
                          <p className="text-sm text-brand-silver mb-4 line-clamp-2">
                            {service.description}
                          </p>
                          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1">
                            Подробнее <ChevronRight className="ml-1 h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}


            <div className="mt-8 text-center md:hidden">
              <Link href="/services">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white hover:text-black rounded-none uppercase">Все услуги</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Calculator Teaser - MOVED UP */}
        <section className="py-32 relative overflow-hidden bg-brand-black" id="calculator">
          <div className="absolute inset-0 bg-brand-black">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-none">
                  Умный <br /><span className="text-stroke-white text-transparent">Расчет</span>
                </h2>
                <p className="text-xl text-brand-silver font-light max-w-md">
                  Планируете бюджет? Воспользуйтесь нашим онлайн-калькулятором для мгновенной оценки стоимости работ.
                </p>
                <div className="pt-4">
                  <Link href="/calculator">
                    <Button size="lg" className="h-16 px-10 bg-white text-black hover:bg-brand-silver hover:text-black rounded-none uppercase tracking-widest font-bold text-lg">
                      Рассчитать стоимость
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative p-1 border border-white/10 bg-brand-gray/30 backdrop-blur-sm rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                    alt="Calculator Preview"
                    className="w-full rounded-lg opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Minimal - MOVED DOWN */}
        <section className="py-32 bg-brand-gray/5 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-silver mb-4">О нас</h2>
                <h3 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-8">
                  Мы не просто варим металл. <br /><span className="text-brand-silver">Мы строим будущее.</span>
                </h3>
                <div className="space-y-6 text-brand-silver font-light leading-relaxed">
                  <p>
                    IRONFORGE — это объединение сертифицированных специалистов, для которых сварка — это искусство. Мы работаем с титаном, нержавеющей сталью и сложными сплавами, обеспечивая качество уровня аэрокосмической отрасли.
                  </p>
                  <p>
                    Наша миссия — предоставить безупречный сервис и долговечность каждой конструкции.
                  </p>
                </div>
                <div className="mt-12">
                  <Link href="/about" className="inline-flex items-center text-white font-bold uppercase tracking-widest hover:text-brand-silver transition-colors border-b border-white pb-1 hover:border-brand-silver">
                    Подробнее о компании <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Welder at work"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 p-8 bg-white text-black max-w-xs hidden md:block">
                  <p className="font-heading font-bold text-4xl mb-2">15+</p>
                  <p className="text-xs uppercase tracking-widest font-semibold">Лет безупречной работы на рынке</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
