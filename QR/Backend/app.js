const express=require("express");
const bodyparser=require("body-parser");
var cors = require('cors')


a={1:"one"}
const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.send(a);

});

app.post("/",function(req,res){
    console.log("post");
    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);
    var n3=n1+n2;
    res.send("result"+n3);
   
   
});

app.listen(8000,function(){
console.log("listening");
});