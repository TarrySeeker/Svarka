import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Реквизиты | IronForge",
    description: "Юридическая информация и реквизиты компании.",
};

export default function RequisitesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-24 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
                    Реквизиты
                </h1>

                <div className="space-y-8 text-industry-300 leading-relaxed font-light">
                    <section className="bg-industry-900 border border-industry-800 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Юридическая информация</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <tbody className="divide-y divide-industry-800">
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium w-64 align-top">Полное наименование</th>
                                        <td className="py-4 text-white font-medium">OOO «АйронФордж» (Пример)</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">ИНН</th>
                                        <td className="py-4 text-white">6671000000</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">КПП / ОГРНИП</th>
                                        <td className="py-4 text-white">667101001 / 1026600000000</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">Юридический адрес</th>
                                        <td className="py-4 text-white">г. Екатеринбург, ул. Строителей, д. 10, оф. 101</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">Фактический адрес</th>
                                        <td className="py-4 text-white">г. Екатеринбург, ул. Промышленная, д. 5</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">Банк</th>
                                        <td className="py-4 text-white">ПАО Сбербанк</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">БИК</th>
                                        <td className="py-4 text-white">044525225</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">Расчетный счет (Р/с)</th>
                                        <td className="py-4 text-white">40702810000000000000</td>
                                    </tr>
                                    <tr>
                                        <th className="py-4 pr-6 text-industry-500 font-medium align-top">Корр. счет (К/с)</th>
                                        <td className="py-4 text-white">30101810400000000225</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 pt-8 border-t border-industry-800">
                            <h3 className="text-xl font-bold text-white mb-4">Контакты для связи (Служба поддержки ЮKassa)</h3>
                            <p className="mb-2">Если у вас возникли вопросы по транзакциям платежей:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Сайт: <strong className="text-industry-accent"><a href="https://yookassa.ru" target="_blank" rel="noreferrer">yookassa.ru</a></strong></li>
                                <li>Телефон: <strong className="text-industry-accent">8 800 250-66-99</strong></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
