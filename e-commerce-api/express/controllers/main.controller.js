const shortid = require("shortid");

const eCommerceController = function(repository) {
    const controller = {
        getHomePage: function(req, res) {
            res.json('E-Commerce API Server');
        },
        getProducts: async function(req, res) {
            try {
                const data = await repository.getProducts();

                return res.status(200).json({
                    data: data
                })
            } catch (err) {
                return res.status(err.code || 500).json({
                    errorMessage: err.message  
                })
            }
        },
        getDiscounts: async function(req, res) {
            try {
                const data = await repository.getDiscounts();

                return res.status(200).json({
                    data: data
                })
            } catch (err) {
                return res.status(err.code || 500).json({
                    errorMessage: err.message  
                })
            }
        },
    }

    return controller;
};

module.exports = eCommerceController;