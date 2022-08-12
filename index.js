const express = require('express')
const app = express()
const port = process.env.PORT||3000
app.get('/',(req,res)=>{
    res.send('hi, test heroku');
})

app.listen(port,()=>{
    console.log("listen at "+port)
});