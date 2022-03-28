const User = require("../model/user");

module.exports = {

    findAll: (req, res) => {
        User.findAll((result) => {
            res.send({ error: false, data: result, message: 'success' });
        });
    },

    findById: (req, res) => {
        const id = req.params.id;
        User.findById(id, (result) => {
            if (id) {
                if(result.length > 0){
                    res.send({ error: false, data: result[0], message: 'success' });
                }else{
                    res.send({ error: false, data: result, message: 'success' });
                }
            }else{
                res.status(400).send({ error: true, message: 'Please enter ID' });
            }
        });
    }

};