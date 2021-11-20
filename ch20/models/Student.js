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


// NOTE : since we are here learning how to retrieve the data therefore we dont need code of creating the data



// RETRIEVE ALL DOCUMENT 
const getAllDoc = async () => {
    const result = await studentModel.find()
    console.log(result);
    // it will retriev all documnet in that collection 

    result.forEach(
        (item) => {
            console.log(
                item.name,
                item.age,
                item.fees.toString(),
                item.hobbies[0],
                item.hobbies[1],
                item.isactive,
                item.comments[0].value,
                item.comments[0].publish,
                item.join
            );
            // in this way we can access each and every component of our documents 
        }
    )
}




// RETRIEVE ALL DOCUMENT , BUT ONLY SPECIFIC FIELDS 
const getAllDocSpecificField = async () => {
    // INCLUDE FIELD WAYS 

    // const result = await studentModel.find().select('name age fees')
    // modelName.find().select() method helps us in fetching only the required field passed in parameter in ' '

    // const result = await studentModel.find().select(['name', 'age' ,'isactive'])
    // can also be written in this way 

    // const result = await studentModel.find().select({name:1,age:1})
    // can also be passed as where we pass field as key ans 1 as value 
    // console.log(result);
    // it will retriev all document in that collection


    // // EXCLUDE FIELDS WAY 
    // const result = await studentModel.find().select('-name -age ')
    // // modelName.find().select() method helps us in fetching all field excluding the fields passed in parameter in ' '
    // console.log(result);


    // const result = await studentModel.find().select('-name -age ')
    // // modelName.find().select() method helps us in fetching all field excluding the fields passed in parameter in ' '
    // console.log(result);

    // const result = await studentModel.find().select(['-name', '-age' ,'-isactive'])
    // // can also be written in this way 
    // console.log(result);

    // const result = await studentModel.find().select({name:0,age:0})
    // // can also be passed as where we pass field as key ans 0 as value ; all field with value 0 will be exclude  
    // console.log(result);


    // without using select() 

    const result = await studentModel.find({}, 'name age')
    // instead of select we will paas {} in find()
    console.log(result);

}


// RETRIEVE ONLY SINGLE DOCUMENT

const getSingleDoc = async () => {
    const result = await studentModel.findById("61977769ac3b6ab11ac8ecf5")
    console.log(result);
    // since result is an object here we can access by result.age , result.name
}



// RETRIEVE ONLY SINGLE DOCUMENT , but with SPECIFIC FIELD along with Id

const getSingleDocSpecificField = async () => {
    const result = await studentModel.findById("61977769ac3b6ab11ac8ecf5", "name", "age")
    // it will just return an object with id , name and age of that document
    console.log(result);
    // since result is an object here we can access by result.age , result.name
}


// RETRIEVE Document by FIELD 

const getDocByField = async () => {
    const result = await studentModel.find({ age: 25 })
    console.log(result);
    // return the Documents which has age as 25
    // remember it has returned the arry of objects 
    // since result is an object here we can access by result.age , result.name
    console.log(result[0].name);
    // it would print the first documents's name 
    console.log(result[1].name);
    // it would print the second documents's name 
    console.log(result[0].age);
    console.log(result[1].age);
}

// RETRIEVE LIMITED DOCUMENT 

const getLimitedDoc = async () => {
    // const result = await studentModel.find().limit(2)
    // it will show only 2 document
    const result = await studentModel.find({}, null, { limit: 2 })
    // another way find(filter,projection,limit)
    console.log(result);
}



// RETRIEVE SKIP DOCUMENT 
const getSkipDoc = async () => {
    // const result = await studentModel.find().skip(1)
    // it would skip the first document
    const result = await studentModel.find({}, null, { skip: 1 })
    // another way
    console.log(result);
}


// COUNT DOCUMENT 
const getDocCount = async () => {
    const result = await studentModel.find().countDocuments()
    // it will count total number of documents 
    console.log(result);
}

// SORT THE DOCUMENT 
const getSortedDoc = async () => {
    // const result = await studentModel.find().sort({age:1})
    // it sorts the documents on basis of age in ascending order
    const result = await studentModel.find().sort({ age: -1 })
    // it sorts the documents on basis of age in descending order
    console.log(result);
}


// MIX QUERY
const mixDoc = async () => {
    const result = await studentModel.find({}, { name: 1, age: 1 }, { limit: 2, skip: 1 })
    console.log(result);
}

// COMPARISON QUERY OPERATOR 
const compDoc = async () => {
    // const result = await studentModel.find({ age: { $gt: 28 } })
    // print all doc which have age greater than 28
    // const result = await studentModel.find({ age: { $gte: 28 } })
    // print all doc which have age greater than equal 28
    
    // const result = await studentModel.find({ age: { $lt: 28 } })
    // // print all doc which have age less than 28
    // const result = await studentModel.find({ age: { $lte: 28 } })
    // // print all doc which have age less than 28

    
    // const result = await studentModel.find({ age: { $ne: 29 } })
    // // print all doc which have age not equal to 29

    
    // const result = await studentModel.find({ age: { $in: [32,28] } })
    // // print all doc which have age which are present in array  (i.e 32 and 28)

    
    const result = await studentModel.find({ age: { $nin: [32,28] } })
    // print all doc which have age which are not present in array  (i.e 32 and 28)

    console.log(result);
}

// LOGICAL QUERY OPERATOR 
const logDoc = async () => {    
    // const result = await studentModel.find({$and:[{age:32},{fees:6500.40}]})
    // return document which satisfy both condition 
    
    
    // const result = await studentModel.find({$or:[{age:25},{fees:6550.40}]})
    // return document which satisfy either condition 

    
    const result = await studentModel.find({age:{$not:{$gt:25}}})
    // return document which satisfy either condition 

    console.log(result);

}



export {
    getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField, getDocByField, getLimitedDoc,
    getSkipDoc, getDocCount, getSortedDoc, mixDoc, compDoc,logDoc
}