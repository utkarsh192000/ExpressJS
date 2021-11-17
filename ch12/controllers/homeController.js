

const homeController=(req,res)=>{
    // res.send("This is Home page ");
    // res.render('index');
    // since we would be rendering index.ejs which is there in views folder ; so use res.render() method 

    res.render('index',{name:"Utkarsh"});
    // we may also pass the local variable here which could be used in view folder template files 
    // here we would be dynamically using it in index.ejs
    
}

export {homeController}
// export homeController so that we can use in route 