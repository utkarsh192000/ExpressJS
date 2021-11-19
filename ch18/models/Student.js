import mongoose from "mongoose";

// Defining Schema 

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true,min:18,max:50},
    // age should be number and must be given , minimum 18 and max 50
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>v>=5500.50},
    // fee should be greater than 5500.50 and of decimal type

    hobbies:{type:Array},
    isactive:{type:Boolean},
    comments:[{value:{type:String},publish:{type:Date,default:Date.now}}],
    join:{type:Date,default:Date.now}
    // if date is not given then put the current date 


})

// Compiling Schema 

const studentModel=mongoose.model('student',studentSchema)

