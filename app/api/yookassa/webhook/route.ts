import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Проверка события от ЮKassa (оплата прошла успешно)
        if (body.event === 'payment.succeeded') {
            const paymentObj = body.object;
            const orderId = paymentObj.metadata?.order_id;

            if (orderId) {
                // Пытаемся обновить статус заказа в базе
                const { error } = await supabase
                    .from('orders')
                    .update({ status: 'paid' })
                    .eq('id', orderId);

                if (error) {
                    console.error('Ошибка обновления статуса заказа при вебхуке ЮKassa:', error);
                } else {
                    console.log(`[YooKassa Webhook] Заказ ${orderId} помечен как 'paid'.`);
                }
            } else {
                console.log('[YooKassa Webhook] Событие об успешной оплате, но order_id не найден в metadata.');
            }
        } else if (body.event === 'payment.canceled') {
            // Если оплата отменена
            const paymentObj = body.object;
            const orderId = paymentObj.metadata?.order_id;

            if (orderId) {
                await supabase
                    .from('orders')
                    .update({ status: 'cancelled' })
                    .eq('id', orderId);
                console.log(`[YooKassa Webhook] Платеж отменен, заказ ${orderId} переведен в 'cancelled'.`);
            }
        }

        // ЮKassa ожидает HTTP 200 OK в ответ на вебхук
        return NextResponse.json({ status: 'ok' });

    } catch (err) {
        console.error('Ошибка обработки вебхука ЮKassa:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
