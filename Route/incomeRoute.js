const {getIncome,postIncome,putIncome,deleteIncome} = require('../Controller/incomeController');

const routes = require('express').Router();

routes.get('/',getIncome);

routes.post('/',postIncome);

routes.put('/:id',putIncome);

routes.delete('/:id',deleteIncome);

module.exports = routes;