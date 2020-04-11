const bot = require('../bot');
const config = require('../config');

module.exports = (msg) => {
  bot.sendMessage(msg.chat.id, `ሰላም ${msg.from.first_name || msg.from.username || ''} 😀 ወደ ኮቪድ-19 መረጃዎች እንኳን በደህና መጡ ... ስለኮቪድ-19 ወረርሽኝ ወቅታዊ መረጃዎችን እና መመሪያዎችን ያግኙ`, {
    reply_markup: JSON.stringify({
      keyboard: config.MAIN_KEYBOARD,
    }),
  });
};
