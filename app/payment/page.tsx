import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Оплата | IronForge",
    description: "Правила оплаты и безопасность платежей, конфиденциальность информации.",
};

export default function PaymentPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-24 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-black mb-12 uppercase">
                    Оплата
                </h1>

                <div className="space-y-8 text-industry-300 leading-relaxed font-light">
                    <section className="bg-industry-900 border border-industry-800 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Правила оплаты и безопасность платежей</h2>

                        <p className="mb-4">
                            Услуга оплаты через интернет осуществляется в соответствии с Правилами международных платежных систем Visa, MasterCard и Платежной системы МИР на принципах соблюдения конфиденциальности и безопасности совершения платежа, для чего используются самые современные методы проверки, шифрования и передачи данных по закрытым каналам связи.
                        </p>
                        <p className="mb-4 text-white">
                            Ввод данных банковской карты осуществляется на защищенной платежной странице : <span className="font-bold text-industry-accent">ЮKassa (ООО НКО «ЮМани»)</span>.
                        </p>

                        <div className="flex flex-wrap gap-4 my-8">
                            <div className="px-6 py-2 bg-white text-black font-bold rounded">Visa</div>
                            <div className="px-6 py-2 bg-white text-black font-bold rounded">MasterCard</div>
                            <div className="px-6 py-2 bg-white text-black font-bold rounded">МИР</div>
                            <div className="px-6 py-2 bg-white text-black font-bold rounded">СБП</div>
                        </div>

                        <p className="mb-4">
                            На странице для ввода данных банковской карты потребуется ввести данные банковской карты: номер карты, имя владельца карты, срок действия карты, трёхзначный код безопасности (CVV2 для VISA, CVC2 для MasterCard, Код Дополнительной Идентификации для МИР). Все необходимые данные пропечатаны на самой карте.
                        </p>
                        <p className="mb-4 text-sm opacity-80 border-l-2 border-industry-600 pl-4 py-2">
                            Трёхзначный код безопасности — это три цифры, находящиеся на обратной стороне карты. Далее вы будете перенаправлены на страницу Вашего банка для ввода кода безопасности, который придет к Вам в СМС. Если код безопасности к Вам не пришел, то следует обратиться в банк выдавший Вам карту.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-4 mt-12">Процесс оплаты</h3>
                        <p className="mb-4">
                            Оплата картой — можно оплатить заказ картой Visa, Master Card или МИР.
                        </p>
                        <p className="mb-4">
                            После нажатия на кнопку <strong>ОНЛАЙН-ОПЛАТА</strong>, Вы будете перенаправлены на платежный шлюз ЮKassa (ООО НКО «ЮМани») для ввода реквизитов Вашей карты. Пожалуйста, приготовьте карту заранее. Обмен данными с платежным шлюзом идет по протоколу шифрования SSL в безопасном режиме. Конфиденциальность сообщаемой персональной информации обеспечивается ООО НКО «ЮМани» (состоит в реестре ЦБ РФ).
                        </p>
                        <p className="mb-4">
                            В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa или MasterCard Secure Code для проведения платежа также может потребоваться ввод специального пароля. Способы и возможность получения паролей для совершения интернет-платежей Вы можете уточнить в банке, выпустившем карту.
                        </p>
                        <p className="mb-4">
                            Также есть возможность оплаты через Систему Быстрых Платежей (СБП).
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
