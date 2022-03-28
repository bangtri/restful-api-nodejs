module.exports = function (router) {
    const User = require("../controller/user");
    var { NodeAdapter } = require("keycloak-nodejs-connect");
    var config = require("../../config.json");
    const keycloak = new NodeAdapter(config)
    router.get("/users", keycloak.protect('realm:verify-identifications'), User.findAll);
    router.get("/users/:id", User.findById);
};