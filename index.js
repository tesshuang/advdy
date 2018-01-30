const express = require("express");
const app = express();

//public port for heroku: process.env.PORT || 3000
const port = 3000;

app.get("/", (req,resp)=>{
    resp.end("Hello to my page.");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    
    console.log("port is running.");
})