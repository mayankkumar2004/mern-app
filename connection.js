const e = require("express");
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch((e)=>{
    console.log(e);
})

