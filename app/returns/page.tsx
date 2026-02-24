import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Возврат | IronForge",
    description: "Условия обмена и возврата товаров надлежащего и ненадлежащего качества.",
};

export default function ReturnsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-24 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
                    Возврат товара
                </h1>

                <div className="space-y-12 text-industry-300 leading-relaxed font-light">
                    {/* Section 1: Возврат средств */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Правила возврата денежных средств</h2>
                        <div className="bg-industry-900 border border-industry-800 p-8 rounded-xl space-y-4">
                            <p className="text-industry-accent font-medium">
                                При оплате картами возврат наличными денежными средствами не допускается. Порядок возврата регулируется правилами международных платежных систем.
                            </p>

                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Потребитель вправе отказаться от товара в любое время до его передачи, а после передачи товара — в течение семи дней;</li>
                                <li>Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара;</li>
                                <li>Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его человеком (товары под заказ);</li>
                                <li>При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через десять дней со дня предъявления потребителем соответствующего требования.</li>
                            </ul>

                            <div className="mt-8 p-6 bg-industry-950 border-l-4 border-industry-600 rounded">
                                <p className="mb-4">
                                    Для возврата денежных средств на банковскую карту необходимо заполнить «Заявление о возврате денежных средств», которое высылается по требованию компанией на электронный адрес и отправить его вместе с приложением копии паспорта.
                                </p>
                                <p className="mb-4">
                                    Возврат денежных средств будет осуществлен на банковскую карту в течение 21 (двадцати одного) рабочего дня со дня получения «Заявление о возврате денежных средств» Компанией.
                                </p>
                                <p className="text-sm opacity-80">
                                    Сумма возврата будет равняться сумме покупки. Срок рассмотрения Заявления и возврата денежных средств начинает исчисляться с момента получения Компанией Заявления и рассчитывается в рабочих днях без учета праздников/выходных дней.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Обмен и возврат (ЗПП) */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Условия обмена и возврата (Закон о ЗПП)</h2>
                        <div className="space-y-6">
                            <p>Наш интернет-магазин работает в соответствии с Законом РФ от 07.02.1992 N 2300-1  «О защите прав потребителей».</p>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white">Статья 18. Права потребителя при обнаружении в товаре недостатков</h3>
                                <p>Если в товаре обнаружены недостатки (не оговоренные продавцом), вы вправе:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>потребовать замены на товар этой же марки;</li>
                                    <li>потребовать замены на такой же товар другой марки с перерасчётом цены;</li>
                                    <li>потребовать соразмерного уменьшения покупной цены;</li>
                                    <li>потребовать незамедлительного безвозмездного устранения недостатков;</li>
                                    <li>отказаться от исполнения договора и потребовать возврата уплаченной за товар суммы.</li>
                                </ul>
                            </div>

                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold text-white">Статья 26.1 (Дистанционный способ продажи)</h3>
                                <p>
                                    Покупатель вправе вернуть товар, приобретённый в интернет-магазине, в течение <strong>семи дней</strong> после получения товара без указания причин возврата.
                                </p>
                                <p>
                                    Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки.
                                </p>
                                <p className="text-industry-400 italic">
                                    * Не подлежат обмену и возврату Товары в соответствии с Постановление Правительства РФ от 19.01.1998 N 55 (напр. товары изготовленные на заказ по индивидуальным размерам клиента).
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-industry-800 p-8 rounded-xl text-center">
                        <h3 className="text-xl font-bold text-white mb-4">Остались вопросы? Обращайтесь!</h3>
                        <p className="mb-6">Свяжитесь с нами для детальной консультации по вопросам возврата.</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <a href="mailto:info@ironforge.ru" className="text-industry-accent hover:text-white transition-colors font-bold text-lg">info@ironforge.ru</a>
                            <Link href="/contact" className="px-8 py-3 bg-industry-accent text-black font-bold uppercase tracking-wider rounded-md hover:bg-white transition-colors">
                                Контакты
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
