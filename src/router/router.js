module.exports = function (router) {
    const User = require("../controller/user");
    router.get("/users", User.findAll);
    router.get("/users/:id", User.findById);
};