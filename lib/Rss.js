let Parser = require('rss-parser');

class Rss{
    constructor(){
        this.rssParser = new Parser();
    }

    async parseFeed(feedUrl){
        const feed = await this.rssParser.parseURL(feedUrl);
        return feed;
    }
}

module.exports = Rss;