const express=require("express")        //expresss conneciton
const connection= require("./src/db/dbConn") //mongoose connection


const app=express();
const port=process.env. PORT || 8000;

app.get('/', function (req, res) {
    res.send('Hello World')
    
  })


app.listen(port,()=>{
    console.log(`listing port....${port}`)
})
 