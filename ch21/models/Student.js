import mongoose from "mongoose";

// Defining Schema 

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    // age should be number and must be given , minimum 18 and max 50
    fees: { type: mongoose.Decimal128, required: true, validate: (v) => v >= 5500.50 },
    // fee should be greater than 5500.50 and of decimal type

    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
    // if date is not given then put the current date 


})

// Compiling Schema 

const studentModel = mongoose.model('student', studentSchema)

// CODE FOR DELETING THE DOCUMENT 


// // delete Document by Id 

// const deleteDocById=async (id)=>{
//     try{
//         const result=await studentModel.findByIdAndDelete(id)
//         // deletes teh first document it finds with given id  
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }


// delete One Document  

const deleteOneDoc = async (a) => {
    try {
        // const result = await studentModel.deleteOne({ _id: id });
        // // it delets the one document that matches with given field 
        // console.log(result);


        const result = await studentModel.deleteOne({ age: a });
        // it delets the one document that matches with given field 
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}



// delete Many Document based on some field  

const deleteManyDoc = async (a) => {
    try {
        const result = await studentModel.deleteOne({ age: a });
        // it delets the all the documents that matches with given field 
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}




export { deleteDocById, deleteOneDoc,deleteManyDoc }
// export functiopns so that they can be used further in app.js