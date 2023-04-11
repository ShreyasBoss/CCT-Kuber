const Expense = require('../Model/expense')


exports.getExpense = async (req,res)=>{
 try {
    const data = await Expense.find();
    return res.status(200).send({errors:false, data:data})
 } catch (error) {
    return res.status(400).send({errors:false, message:error.message})
 }
}

exports.postExpense = async (req,res)=>{
    try {
       const data = await Expense.create(req.body);
       return res.status(200).send({errors:false, data:data})
    } catch (error) {
       return res.status(400).send({errors:false, message:error.message})
    }
}   

exports.putExpense = async (req,res)=>{
    try {
       const data = await Expense.findByIdAndUpdate(req.params.id, req.body,{new:true});
       return res.status(200).send({errors:false, data:data})
    } catch (error) {
       return res.status(400).send({errors:false, message:error.message})
    }
}

exports.deleteExpense = async (req,res)=>{
    try {
       const data = await Expense.findByIdAndDelete(req.params.id);
       return res.status(200).send({errors:false, data:data})
    } catch (error) {
       return res.status(400).send({errors:false, message:error.message})
    }
}