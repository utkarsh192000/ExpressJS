import mongoose from 'mongoose'
// imported mongoose 

// Define Schema 

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:50},
    fees:{type:mongoose.Decimal128,required:true,validate:(value)=>{
        value>=5000.5
    }},
})


// compiling Schema 
const StudentModel=mongoose.model("student",studentSchema)


export default StudentModel
// export the Model so that we can use it later 

