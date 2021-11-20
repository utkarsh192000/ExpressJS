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

// CODE FOR UPDATING THE DOCUMENT 


// update document 

const updateDocById = async (id) => {
    try {
        // const result=await studentModel.findByIdAndUpdate(id,{name:"suresh"});
        // // it would update name of the document that matches with the id passed as parameter 
        // console.log(result);
        // // it would should the previous document values 

        const result = await studentModel.findByIdAndUpdate(id, { name: "suresh" }, { returnDocument: 'after' });
        // it would update name of the document that matches with the id passed as parameter 
        console.log(result);
        // it would should the updated document values 

    }
    catch (err) {
        console.log(err);
    }
}




// update One document  

const updateOneDoc = async (id) => {
    try {
        //     const result=await studentModel.updateOne({_id:id},{name:"Sujit"});
        //     // it would update name of the document that based on id , it can be any field value , ex based on age ,fee
        //     // it would fetch first value match with it and update it 
        //     console.log(result);

        const result = await studentModel.updateOne({ _id: id }, { name: "Arjun" }, { upsert: true });
        // it would update name of the document that based on id , if not found ; craetes it and then insert 
        console.log(result);

    }
    catch (err) {
        console.log(err);
    }
}



// update One document by specific Field  

const updateOneDocByField = async (a) => {
    try {
        const result = await studentModel.updateOne({ age:a }, { name: "Risabh" }, { upsert: true });
        // it would update name of the document that based on age , if not found ; creates it and then insert 
        // if there is any document whose age is 25 , its name would be changesd to Risabh 
        console.log(result);

    }
    catch (err) {
        console.log(err);
    }
}


// update Many documents  

const updateManyDoc = async (a) => {
    try {
        const result = await studentModel.updateMany({ age:a }, { name: "Dollar" }, { upsert: true });
        // it would update name of the all document that based on age , if not found ; creates it and then insert 
        // if there is any document whose age is 29 , its name would be changed to Dollar  
        console.log(result);

    }
    catch (err) {
        console.log(err);
    }
}






export { updateDocById, updateOneDoc,updateOneDocByField ,updateManyDoc}
// export functiopns so that they can be used further in app.js 