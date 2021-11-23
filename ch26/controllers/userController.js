
// Our UserControoler class will have 3 method which can be accessed using .

class UserController{
    static home=(req,res)=>{
        res.render("index");
    }
    // index.ejs will be served

    static registration=(req,res)=>{
        res.render("registration");
    }
    // registration.ejs will be served

    static login=(req,res)=>{
        res.render("login");
    }
    // login.ejs will be served
}

export {UserController}