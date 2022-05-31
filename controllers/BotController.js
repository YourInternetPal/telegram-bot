const Bot = require("../lib/Bot");

class BotController{
    constructor(){

    }

    handler(req, res){
        console.log(req.body);
        const{ message } = req.body;
        const bot = new Bot();
        if (message.text.startsWith("remind")){
            bot.remind(message.chat.id, message.text);
        }else{
            bot.sendMessage(message.chat.id, "Hello from the other Side");
        }
        
        res.sendStatus(200);
    }
}

module.exports = BotController;