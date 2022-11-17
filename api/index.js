const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
    res.send({
        message: "this is the API",
    });
});
console.log('were in root api')
// ROUTER: /api/order
const orderRouter = require('./order');
apiRouter.use('/order', orderRouter);


module.exports = apiRouter;