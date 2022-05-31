
const express = require('express');

const { PORT } = require("./config");
const { auth } = require("./middleware/auth");

const BotController = require('./controllers/BotController');
const PingController = require('./controllers/PingController');

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  auth(req, res, next);
})

app.post(`/bot`, (req, res) => {
  const bc = new BotController();
  bc.handler(req, res);
  
});

app.get(`/ping`, async (req, res) => {
  const pc = new PingController();
  pc.handler(req, res);
})


// Start Express Server
app.listen(PORT, () => {
  console.log(`Express server is listening on ${PORT}`);
});
