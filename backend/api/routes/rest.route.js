const express = require('express');
const {
    getRestHandler,
} = require('../controllers/rest.controller');

const router = express.Router();

router.get('/rest', getRestHandler);

module.exports = router;
