

const allStudent=(req,res)=>{
    res.send(" All Student ");
}


const deleteStudent=(req,res)=>{
    // we have written a code using route parameter , i.e dynamic routing
    console.log(req.params);
    // prints the req.param object
    const {id}=req.params
    // destructure the object
    console.log(id);
    // print id field of object
    if(id==10){
        return res.send("This is id of Utkarsh no ,cannot be deleted ");
        // if we id ==10 , we cant delete it
    }
    return res.send(` Student Delete ${id} `);
    // else just print the id
}

// NOTE : Now we need to export them so that , they can be used elsewhere 


// module.exports={allStudent,deleteStudent}
// old way to export modules

export { allStudent,deleteStudent}
// new way to export it 


// NOTE: it must be imported in routes/student.js so that 
// it can be used directly with its name ,which passed as callback ; which will be further imported in app.js