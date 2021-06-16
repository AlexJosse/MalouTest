const {
    getCollections,
    getProductsByCollectionId,
  } = require('../services/collections.service');
  
    /**
     * Get collections info
     */
    const getCollectionsHandler = async (req, res, next) => {
    try {
        const { cursor } = req.params;
        console.log(cursor);
        const collections = await getCollections(cursor);
        res.status(200).json(collections);
    } catch (err) {
        next(err);
    }
    };

    /**
     * Get collections info
     */
    const getProductByCollectionIdHandler = async (req, res, next) => {
        try {
            const { collectionId } = req.params;
            const collections = await getProductsByCollectionId(collectionId);
            res.status(200).json(collections);
        } catch (err) {
            next(err);
        }
    };
  
  module.exports = {
    getCollectionsHandler,
    getProductByCollectionIdHandler
  };
  