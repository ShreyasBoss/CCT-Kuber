const {getExpense,postExpense,putExpense,deleteExpense} = require('../Controller/expenseController');

const routes = require('express').Router();

routes.get('/',getExpense);

routes.post('/',postExpense);

routes.put('/:id',putExpense);

routes.delete('/:id',deleteExpense);

module.exports = routes;