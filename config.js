require('dotenv').config()

const config = {
    TELEGRAM_TOKEN : process.env.TELEGRAM_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    API_TOKEN :  process.env.API_TOKEN,
    PORT : process.env.PORT || 4000,
    REDIS_TLS_URL : process.env.REDIS_TLS_URL,
    REDIS_URL : process.env.REDIS_URL
}

module.exports = config;