const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')
const incomeController = require('./Route/incomeRoute');
const expenseController = require('./Route/expenseRoute');

//init
const app = express()

//midelwere
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('code chakra tech')
})

//main route

app.use('/api/income',incomeController)
app.use('/api/expense',expenseController)




app.listen(process.env.PORT,()=>{
    console.log(`running server on port ${process.env.PORT}`);
})

async function main(){
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true
     })
    const data = await res.default;
    console.log(data.STATES[data.STATES.connected])
}

main()

main()
