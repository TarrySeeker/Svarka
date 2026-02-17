import { Calculator } from "@/components/features/Calculator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-12 container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-black text-foreground uppercase">
                        Project <span className="text-industry-accent">Estimator</span>
                    </h1>
                    <p className="text-industry-500 max-w-2xl mx-auto">
                        Get a quick ballpark figure for your welding needs. For precise quotes, please contact our engineering team.
                    </p>
                </div>

                <Calculator />
            </main>
            <Footer />
        </div>
    );
}
