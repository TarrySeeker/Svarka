import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { orderId, amount, description } = body;

        const shopId = process.env.YOOKASSA_SHOP_ID;
        const secretKey = process.env.YOOKASSA_SECRET_KEY;

        // Тестовый режим-заглушка, если ключей ЮKassa нет в окружении
        if (!shopId || !secretKey) {
            console.log('Ключи ЮKassa не найдены, возвращаем тестовую ссылку успеха.');
            return NextResponse.json({
                url: `/cart?payment_status=success_mock&orderId=${orderId}`
            });
        }

        const idempotenceKey = crypto.randomUUID();

        // Основной сайт (для редиректа после оплаты)
        // Для продакшена лучше задать NEXT_PUBLIC_SITE_URL в .env, например, https://ironforge.ru
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

        // Формируем payload для ЮKassa API v3
        const payload = {
            amount: {
                value: Number(amount).toFixed(2),
                currency: "RUB"
            },
            capture: true,
            confirmation: {
                type: "redirect",
                return_url: `${siteUrl}/cart?payment_status=success&orderId=${orderId}`
            },
            description: description || `Оплата заказа №${orderId}`,
            metadata: {
                order_id: orderId
            }
        };

        const authString = Buffer.from(`${shopId}:${secretKey}`).toString('base64');

        const response = await fetch('https://api.yookassa.ru/v3/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Idempotence-Key': idempotenceKey,
                'Authorization': `Basic ${authString}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Ошибка ЮKassa API:', errorText, response.status);
            return NextResponse.json({ error: 'Ошибка при создании платежа ЮKassa' }, { status: 500 });
        }

        const data = await response.json();

        if (data.confirmation && data.confirmation.confirmation_url) {
            return NextResponse.json({ url: data.confirmation.confirmation_url });
        }

        return NextResponse.json({ error: 'Не удалось получить ссылку на оплату от шлюза' }, { status: 500 });

    } catch (err) {
        console.error('Ошибка в роуте ЮKassa:', err);
        return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
    }
}
