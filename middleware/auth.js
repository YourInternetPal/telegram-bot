const { API_TOKEN } = require("../config");

module.exports.auth = function (req, res, next){
    if (req.query.key == API_TOKEN){
        next();
    }else{
        res.sendStatus(403);
    }
}