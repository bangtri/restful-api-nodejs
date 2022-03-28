require("dotenv").config();
var { NodeAdapter } = require("keycloak-nodejs-connect");
var config = require("./config.json");
const keycloak = new NodeAdapter(config)
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
var session = require('express-session');
var memoryStore = new session.MemoryStore();
let port = process.env.APPPORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'ADtAUScX8FCWEXvOOz7doDUBZzyO3KpF',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));
app.use(keycloak.middleware({ logout: '/logout' }))
require("./src/router/router")(app);
app.listen(port);
app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Restful API with NodeJS , Express, MySQL' })
});