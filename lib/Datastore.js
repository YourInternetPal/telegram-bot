const redis = require("redis");
const { REDIS_URL } = require("../config");


class Datastore{
    constructor(){
        this.initDataStore();
    }

    async initDataStore(){
        this.client = redis.createClient({
            url: REDIS_URL,
            socket: {
                tls: true,
                rejectUnauthorized: false
            }
        });
        await this.client.connect();
        this.client.on('connect', function(e){
            console.log('conneceted');
        })
    }

    async create(key, value){
        console.log("here")
        await this.client.set('test', 'test_value');
        console.log("here 222")
    }

    async readOne(){

    }

    async read(){

    }

    async update(){

    }

    async delete(key){
        await this.client.del(key);
    }
}

module.exports = Datastore;