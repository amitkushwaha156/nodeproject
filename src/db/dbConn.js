const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connect= mongoose.connect('mongodb://127.0.0.1:27017/merndata')
.then(()=>{
    console.log("db connection successfull")
}).catch((e)=>{
    console.log("not connectedd")
})

module.exports= connect