import { NextResponse } from 'next/server';

interface OrderData {
    id: string;
    customer_info: { name: string; phone: string; comment?: string };
    items: Array<{ name: string; price: number | string; type: string; details?: string; quantity?: number }>;
    total: number;
    shipping_cost?: number;
    shipping_method?: string;
    delivery_detail?: any;
}

export async function POST(req: Request) {
    try {
        const { orderData }: { orderData: OrderData } = await req.json();

        const results = {
            telegram: false,
            email: false,
            errors: [] as string[]
        };

        // Отправка в Telegram
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (botToken && chatId) {
            try {
                const message = formatTelegramMessage(orderData);
                
                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });

                if (response.ok) {
                    results.telegram = true;
                } else {
                    const error = await response.text();
                    results.errors.push(`Telegram error: ${error}`);
                }
            } catch (error) {
                results.errors.push(`Telegram exception: ${error}`);
            }
        }

        // Отправка на email
        const emailServiceUrl = process.env.EMAIL_SERVICE_URL; // например, MailChimp, SendGrid webhook
        const businessEmail = process.env.BUSINESS_EMAIL;

        if (emailServiceUrl && businessEmail) {
            try {
                const emailData = {
                    to: businessEmail,
                    subject: `Новый заказ #${orderData.id} - 24svarkaekb.ru`,
                    html: formatEmailMessage(orderData)
                };

                const response = await fetch(emailServiceUrl, {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.EMAIL_SERVICE_TOKEN}`
                    },
                    body: JSON.stringify(emailData)
                });

                if (response.ok) {
                    results.email = true;
                } else {
                    const error = await response.text();
                    results.errors.push(`Email error: ${error}`);
                }
            } catch (error) {
                results.errors.push(`Email exception: ${error}`);
            }
        }

        // Если нет настроек для уведомлений
        if (!botToken || !chatId) {
            results.errors.push('Telegram credentials not configured');
        }
        if (!emailServiceUrl || !businessEmail) {
            results.errors.push('Email service not configured');
        }

        return NextResponse.json(results);

    } catch (error) {
        console.error('Notifications API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

function formatTelegramMessage(orderData: OrderData): string {
    const { customer_info, items, total, shipping_cost, shipping_method, delivery_detail } = orderData;
    
    let message = `🔔 <b>НОВЫЙ ЗАКАЗ #${orderData.id}</b>\n\n`;
    
    message += `👤 <b>Клиент:</b> ${customer_info.name}\n`;
    message += `📞 <b>Телефон:</b> ${customer_info.phone}\n`;
    if (customer_info.comment) {
        message += `💬 <b>Комментарий:</b> ${customer_info.comment}\n`;
    }
    
    message += `\n📦 <b>Заказанные услуги/товары:</b>\n`;
    items.forEach((item, index) => {
        const quantity = item.quantity ? ` (x${item.quantity})` : '';
        const price = typeof item.price === 'number' ? `${item.price.toLocaleString('ru-RU')} ₽` : item.price;
        message += `${index + 1}. ${item.name}${quantity} - ${price}\n`;
        if (item.details) {
            message += `   <i>${item.details}</i>\n`;
        }
    });
    
    if (shipping_cost && shipping_cost > 0) {
        message += `\n🚛 <b>Доставка:</b> ${shipping_method || 'Не указан'} - ${shipping_cost.toLocaleString('ru-RU')} ₽\n`;
        if (delivery_detail?.address) {
            message += `📍 <b>Адрес:</b> ${delivery_detail.city}, ${delivery_detail.address}\n`;
        }
    }
    
    message += `\n💰 <b>ИТОГО:</b> ${total.toLocaleString('ru-RU')} ₽`;
    
    return message;
}

function formatEmailMessage(orderData: OrderData): string {
    const { customer_info, items, total, shipping_cost, shipping_method, delivery_detail } = orderData;
    
    let html = `
        <h2>🔔 Новый заказ #${orderData.id}</h2>
        
        <h3>Информация о клиенте:</h3>
        <p><strong>Имя:</strong> ${customer_info.name}</p>
        <p><strong>Телефон:</strong> ${customer_info.phone}</p>
        ${customer_info.comment ? `<p><strong>Комментарий:</strong> ${customer_info.comment}</p>` : ''}
        
        <h3>Заказанные услуги/товары:</h3>
        <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
            <tr>
                <th>Название</th>
                <th>Кол-во</th>
                <th>Цена</th>
                <th>Детали</th>
            </tr>
    `;
    
    items.forEach(item => {
        const quantity = item.quantity || 1;
        const price = typeof item.price === 'number' ? `${item.price.toLocaleString('ru-RU')} ₽` : item.price;
        html += `
            <tr>
                <td>${item.name}</td>
                <td>${quantity}</td>
                <td>${price}</td>
                <td>${item.details || '-'}</td>
            </tr>
        `;
    });
    
    html += '</table>';
    
    if (shipping_cost && shipping_cost > 0) {
        html += `
            <h3>Доставка:</h3>
            <p><strong>Способ:</strong> ${shipping_method || 'Не указан'}</p>
            <p><strong>Стоимость:</strong> ${shipping_cost.toLocaleString('ru-RU')} ₽</p>
        `;
        if (delivery_detail?.address) {
            html += `<p><strong>Адрес:</strong> ${delivery_detail.city}, ${delivery_detail.address}</p>`;
        }
    }
    
    html += `
        <h3>Итого: ${total.toLocaleString('ru-RU')} ₽</h3>
        
        <hr>
        <p><small>Заказ создан: ${new Date().toLocaleString('ru-RU')}</small></p>
    `;
    
    return html;
}