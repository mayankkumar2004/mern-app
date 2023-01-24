const mongoose=require("mongoose");

const employSchema=new mongoose.Schema({
    fisrtname:{
        type:String
    },
    secondname:{
        type:String
    },
    email:{
        type:String
    },
    
   
});



const Register=new mongoose.model("Register",employSchema);


module.exports=Register;
