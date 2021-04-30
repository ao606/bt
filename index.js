const TelegramBot = require('node-telegram-bot-api');
const token = '1770532562:AAEZRrdkCv42-5LoblwbQ6cOm1cAPO9pkFw';

const bot = new TelegramBot(token, {polling: true});


bot.onText(/Привет/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});