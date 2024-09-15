const express = require('express');
const router = express.Router();
const checkSession = require('../middleware/checkSession');
const IndexController = require('../controllers/Product/IndexController');

module.exports = app => {
    const redisClientService = app.get('redisClientService');

    const indexController = new IndexController(redisClientService);

    router.get('/', [checkSession], (...args) => indexController.index(...args));

    return router;
};
