let express = require("express");
let app = express();



app.get("/sayHello",(req,res)=> {
    res.send("Welcome to simple express js application");
})

app.get("/greeting/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user "+name);
})



app.listen(9090,()=>console.log("Server running on port number 9090"));