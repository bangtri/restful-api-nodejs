require("dotenv").config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let port = process.env.APPPORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
require("./src/router/router")(app);
app.listen(port);
app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Restful API with NodeJS , Express, MySQL' })
});