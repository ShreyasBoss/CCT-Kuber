const Income = require('../Model/income')


exports.getIncome = async (req,res)=>{
 try {
    const data = await Income.find();
    return res.status(200).send({errors:false, data:data})
 } catch (error) {
    return res.status(400).send({errors:false, message:error.message})
 }
}





exports.postIncome = async (req,res)=>{
    try {
       const data = await Income.create(req.body);
       return res.status(200).send({errors:false, data:data})
    } catch (error) {
       return res.status(400).send({errors:false, message:error.message})
    }
}   

exports.putIncome = async (req,res)=>{
    try {
       const data = await Income.findByIdAndUpdate(req.params.id, req.body);
       return res.status(200).send({errors:false, data:data})
    } catch (error) {
       return res.status(400).send({errors:false, message:error.message})
    }
}

exports.deleteIncome = async (req,res)=>{
    try {
       const data = await Income.findByIdAndDelete(req.params.id);
       return res.status(200).send({errors:false, data:data})
    } catch (error) {
       return res.status(400).send({errors:false, message:error.message})
    }
}