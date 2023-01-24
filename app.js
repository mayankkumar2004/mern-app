

const mongoose = require('mongoose');
const hostname="0.0.0.0";
mongoose.connect('mongodb+srv://mkrjha1970:tigK0uQvV9tJYRR5@customer.filp2bq.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));




  const kittySchema = new mongoose.Schema({
    name:  String,
    lastname:String,
    email:String
  });


  const Kitten = mongoose.model('Kitten', kittySchema);



 




const express=require("express");

const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));


const request=require("request");
const e = require("express");
const { response } = require("express");


app.use(express.static("public"));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/signup.html");

});


app.post("/",function(req,res){

var firstname=req.body.fname;
var secondname=req.body.sname;
var email=req.body.em;
const silence = new Kitten({ name: firstname,lastname:secondname,email:email});
silence.save().then(
  res.sendFile(__dirname+"/success.html")
)
});















































app.listen(3000,function(){
    console.log("Server is running on port 3000");
});