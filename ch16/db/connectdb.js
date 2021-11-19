
import mongoose from "mongoose";
// import mongoose module 

// Using Promise-then

// const connectDB=()=>{
//     return mongoose.connect("mongodb://localhost:27017/schooldb").then(()=>{
//         console.log("Connected Successfully...");
//     })
//     .catch((err)=>{
//         console.log(" Error hai ");
//     })
// }

// Using async Await Method 

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connected Successfully.....");
    }
    catch (err) {
        console.log("Error present");
    }
}



export default connectDB