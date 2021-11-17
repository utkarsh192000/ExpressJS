

const aboutController=(req,res)=>{
    // res.send("This is about page ");
    // res.render('index');
    // since we would be rendering about.ejs which is there in views folder ; so use res.render() method 

    res.render('about',{name:"Rohit"});
    // we may also pass the local variable here which could be used in view folder template files 
    // here we would be dynamically using it in about.ejs
    
}

export {aboutController}
// export homeController so that we can use in route 