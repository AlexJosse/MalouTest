const express = require('express');
const {
    getCollectionsHandler,
    getProductByCollectionIdHandler,
} = require('../controllers/collections.controller');

const router = express.Router();

router.get('/', getCollectionsHandler);
router.get('/:cursor', getCollectionsHandler);
router.get('/collection/:id', getProductByCollectionIdHandler);

module.exports = router;
