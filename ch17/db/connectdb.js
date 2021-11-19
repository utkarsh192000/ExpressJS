
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

        const DB_OPTIONS={
            user:"utkarsh",
            pass:"123456",
            dbName:"schooldb",
            authSource:"schooldb"
        }
        // here we have paased user and password , if anything is wrong it will give error 
        // we may pass this options in .connect()

        // await mongoose.connect(DATABASE_URL);
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connected Successfully.....");
    }
    catch (err) {
        console.log(err);
    }
}



export default connectDB