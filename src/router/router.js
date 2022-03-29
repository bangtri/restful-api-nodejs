module.exports = function (router) {
    const User = require("../controller/user");
    var { NodeAdapter } = require("keycloak-nodejs-connect");
    var config = require("../../config.json");
    const keycloak = new NodeAdapter(config)
    router.get("/users", keycloak.protect('realm:view-user'), User.findAll);
    router.get("/users/:id", keycloak.protect('realm:view-user'), User.findById);
    router.post("/users/search", keycloak.protect('realm:view-user'), User.findByName);
};