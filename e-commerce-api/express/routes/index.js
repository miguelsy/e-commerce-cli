var express = require('express');
var router = express.Router();

const db = require('../db/db');
const repository = require('../repositories/main.repository')(db);
const controller = require('../controllers/main.controller')(repository);

const seed = require('../seed/seed')(repository);
seed.seedProducts();
seed.seedDiscounts();

/* GET home page. */
router.get('/', controller.getHomePage);

module.exports = router;