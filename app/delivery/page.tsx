import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Доставка | IronForge",
    description: "Правила доставки товара и условия транспортировки.",
};

export default function DeliveryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-24 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
                    Доставка
                </h1>

                <div className="space-y-8 text-industry-300 leading-relaxed font-light">
                    <section className="bg-industry-900 border border-industry-800 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Правила доставки товара</h2>

                        <p className="mb-4">
                            Доставка вашего заказа осуществляется с помощью транспортной компании <strong className="text-white">СДЭК</strong>. Доставка осуществляется курьером до двери либо до пункта выдачи. Вы можете забрать заказ с помощью самовывоза.
                        </p>

                        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 border border-industry-700 bg-industry-950 rounded-lg">
                                <h3 className="font-bold text-white mb-2 text-lg">Пункт выдачи заказов (ПВЗ)</h3>
                                <p className="text-sm">Заберите заказ в удобном для вас пункте выдачи СДЭК. Выбор пункта доступен при оформлении заказа в корзине.</p>
                            </div>
                            <div className="p-6 border border-industry-700 bg-industry-950 rounded-lg">
                                <h3 className="font-bold text-white mb-2 text-lg">Доставка курьером ДО ДВЕРИ</h3>
                                <p className="text-sm">Курьер СДЭК доставит заказ прямо до вашей двери в согласованное с вами время.</p>
                            </div>
                        </div>

                        <p className="mb-4">
                            Выбрать нужный вам тариф, сроки и стоимость перевозки вы можете в разделе «Оформление заказа». Стоимость перевозки будет включена в общую стоимость заказа.
                        </p>
                        <p className="mb-4 font-medium text-white">
                            Отправка ваших заказов происходит в течении 30 часов после совершения оплаты, без учета праздничных и выходных дней.
                        </p>
                        <p className="mb-4">
                            Мы передаем ваш заказ в транспортную компанию. Сроки доставки также указаны в разделе «Оформление заказа» при выборе способа доставки.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
