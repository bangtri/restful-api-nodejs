const db = require("../common/connect");

const User = (user) => {
    this.id = user.id;
    this.name = user.name;
    this.createdDate = user.createdDate;
};

User.findAll = (res) => {
    const sql = "SELECT * FROM users ";
    db.query(sql, (error, result) => {
        if (error) {
            return res(error);
        }
        res(result);
    });
};

User.findById = (id, res) => {
    const sql = "SELECT * FROM users where id = ? ";
    db.query(sql, id, (error, result) => {
        if (error) {
            return res(error);
        }
        res(result);
    });
};

User.findByName = (data, res) => {
    const sql = "SELECT * FROM users where name = ? ";
    db.query(sql, data, (error, result) => {
        if (error) {
            return res(error);
        }
        res(result);
    });
};

module.exports = User;