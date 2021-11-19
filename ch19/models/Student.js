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



// create a function using async await and embedd creating and saving the document 

// const createDoc = async () => {
//     try {
//         const studentDoc = new studentModel({
//             name: "Rahut",
//             age: 25,
//             fees: 6500.40,
//             hobbies: ["dancing", "singing"],
//             isactive: true,
//             comments: [{ value: "This is good mongoose" }]
//             // date is default, so it would automatically stored 
//         })


//         // Save the document 
//         const result = await studentDoc.save()
//         console.log(result);

//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// Here we had hard coded our data , we can also pass it as parameter  in a way 

const createDoc = async (nm,ag,fe,hob,isact,comt) => {
    try {
        const studentDoc = new studentModel({
            name:nm,
            age: ag,
            fees: fe,
            hobbies:hob,
            isactive:isact,
            comments:comt
            // date is default, so it would automatically stored 
        })


        // Save the document 
        const result = await studentDoc.save()
        console.log(result);

    }
    catch (err) {
        console.log(err);
    }
}




export default createDoc








// NOTE: THIS WHOLE CAN BE EMBEDDED IN A async await using try catch ; and capsulated as as function which can be 
// imported and used

// // Creating new Document 
// const studentDoc=new studentModel({
//     name:"Rohit",
//     age:22,
//     fees:6500.40,
//     hobbies:["dancing","singing"],
//     isactive:true,
//     comments:[{value:"This is good mongoose"}]
//     // date is default, so it would automatically stored 
// })


// // Save the document 
// const result =await studentDoc.save()
// console.log(result);