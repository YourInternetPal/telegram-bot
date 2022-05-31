const TelegramBot = require('node-telegram-bot-api');
const Datastore = require("./Datastore");
const { TELEGRAM_TOKEN } = require("../config");

class Bot{
    constructor(){
        this.bot = new TelegramBot(TELEGRAM_TOKEN);
    }

    sendMessage(chatId, message){
        this.bot.sendMessage(chatId, message);
    }

    async remind(chatId, message){
        const content = message.split(" ");
        if (content.length < 3){
            this.bot.sendMessage(chatId, "Oops! There are not enough data to store. Please follow this example when you me to remind me anything\n\n remind 2022-01-01 Don't Look up");
            return;
        }
        if (new Date(content[1]) == "Invalid Date"){
            this.bot.sendMessage(chatId, "Oops! The date format is invalid :(");
            return;
        }

        const ds = new Datastore();

        const title = content.slice(2).join(" ");
        try {
            await ds.create("SHOWS", {title, date: content[1]})
            this.bot.sendMessage(chatId, `Ookie Dokie! I will remind you ${title} on ${content[1]}`);
        } catch (error) {
            console.log(error);
            this.bot.sendMessage(chatId, `Oops! Somethin went wrong. Please try again. `);
        }
        
        
        
        
    }
}

module.exports = Bot;