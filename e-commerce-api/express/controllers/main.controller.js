const shortid = require("shortid");

const eCommerceController = function(repository) {
    const controller = {
        getHomePage: function(req, res) {
            res.json('E-Commerce API Server');
        }
    }

    return controller;
};

module.exports = eCommerceController;