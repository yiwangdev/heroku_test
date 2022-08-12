const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hi, test heroku');
})

app.listen(3000,()=>{
    console.log("listen at 3000")
});