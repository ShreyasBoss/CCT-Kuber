const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateOfIncome:{
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
    totalIncome:{
        type:Number
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
 
})

module.exports = mongoose.model('income',incomeSchema)