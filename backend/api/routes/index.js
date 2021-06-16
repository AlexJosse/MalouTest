const express = require('express');

const rest = require('./rest.route');
const collections = require('./collections.route');
const router = express.Router();

router.get('/wake-up', (_req, res) => res.send('👍'));
router.get('/rest', rest);
router.use('/collections', collections);

module.exports = router;
