import mongoose from "mongoose";
// import mongoose , to use it 

// Definig the Schema 

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    join: { type: Date, default: Date.now }
})


// COMPILING THE SCHEMA

const UserModel=mongoose.model('user',userSchema);
// we have compiled the the schema , a collection named users would be created in Database blogdb
// and in business logic , it would be called as UserModel

export default UserModel
// Export it so that it can be used later 