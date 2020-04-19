const telegram = require('telegram-bot-api');
require('dotenv').config()

var bot = new telegram({
        token: process.env.TG_API_KEY,
        updates: {
            enabled: true
        }
})

bot.on('message', function(message)
{
    bot.sendMessage({
        chat_id: message.chat.id,
        text: 'HELLO WORLD!!'
    })
});