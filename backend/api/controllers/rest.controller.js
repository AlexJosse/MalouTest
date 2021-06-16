const {
    getRest,
  } = require('../services/rest.service');
  
  //  get rest test
  const getRestHandler = async (req, res, next) => {
    try {
      const data = await getRest();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  
module.exports = {
    getRestHandler,
  };
  