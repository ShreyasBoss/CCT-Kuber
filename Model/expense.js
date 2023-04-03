const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateOfexpense:{
        type:Date,
        required:true
    },
    payment:{
        type:Number,
        required:true
    },
    des:{
        type:String
    },
    totalExpense:{
        type:Number
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('expense',expenseSchema)