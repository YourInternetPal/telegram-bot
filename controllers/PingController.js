const Bot = require("../lib/Bot");
const Rss = require("../lib/Rss");
const { TELEGRAM_CHAT_ID } = require("../config");

class PingController{
    constructor(){

    }

    async handler(req, res){
        const LAST_INDEX = 7;
        const rss = new Rss();
        let feed = await rss.parseFeed('');
        let feedMessage = "These are the latest in Show RSS\n\n";
        feed.items.some((item, index) => {
            feedMessage += `${index+1}. ${item.title} \n ${item.pubDate}\n\n`
            if (index == LAST_INDEX) return true;
        })
        const bot = new Bot();
        bot.sendMessage(TELEGRAM_CHAT_ID, feedMessage);
        res.sendStatus(200);
    }
}

module.exports = PingController;