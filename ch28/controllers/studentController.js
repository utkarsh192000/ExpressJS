import StudentModel from "../models/Student.js";
// import StudentModel so taht we can use it 

// NOTE: we would be making a class which contains different functions, which could be called using . operator  

class StudentController {
    static createDoc = async(req, res) => {
        // res.send("Data created....");
        try{
            const {name,age,fees}=req.body
            // suppose all the details have came in form of JSON and stored in req.body 
            // we have destructured it in name ,age ,fees 
            // now we will create a doc of ourselves 
            const doc=new StudentModel({
                name:name,
                age:age,
                fees:fees
            })
            // we created aour own doc using the req.body whcih came to us 
            // it could be written in a way
            // const doc=new StudentModel(req.body);

            const result=await doc.save();
            // we will save our whole doc in variable named result 
            res.status(201).send(result);
        }
        catch(error){
            console.log(error);
        }
    }
    // retrieve the data through API 
    static getAllDoc = async(req, res) => {
        // res.send("All doc");
        try{
            const result=await StudentModel.find();
            res.send(result);
        }
        catch(error){
            console.log(error);
        }
    }

    static getSingleDocById = async(req, res) => {
        // res.send("get single doc by id ");
        try{
            const result=await StudentModel.findById(req.params.id);
            // it would fetch the id from endpoint and store in req.param.id and thereafter in findById()
            res.send(result);
            // return whatever stored in result as response 
        }
        catch(error){
            console.log(error);
        }
    }

    static updateDocById = async(req, res) => {
        // res.send("update single doc by id ");
        try{
            const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body);
            // fetches id from browser endpoint hit , and update with whatever is given in req.body
            res.send(result);

        }
        catch(error){
            console.log(error);
        }
    }

    static deleteDocById = async(req, res) => {
        // res.send("delete single doc by id ");
        try{
            const result=await StudentModel.findByIdAndDelete(req.params.id);
            res.status(204).send(result);
        }
        catch(error){
            console.log(error);
        }
    }
}

export default StudentController 
// export it so that it could be used 