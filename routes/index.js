const router = require('express').Router();
const carRouter = require('./carRouter');

router.use('/api/v1', carRouter);

module.exports = router;
