class StudentController {
    static set_cookie = (req, res) => {
        // res.cookie("username", "utkarsh");
        res.cookie("cart",9);
        // it will set the username as utkarsh in cookies
        res.cookie("username","harsh",{maxAge:45000});
        // it will set the age of cookie for 10 sec , i.e after 10 sec the cookies would again reset 
        res.send("Cookie Set.... ");
    }

    static get_cookie = (req, res) => {
        console.log(req.cookies);
        // it holds an object which contains all cookie name and their values
        console.log(req.cookies.username);
        // console.log(req.cookies.cart);
        // we can also access them individually
        res.send("Cookie Get... ");
    }

    static delete_cookie = (req, res) => {
        res.clearCookie("cart");
        // it would delete whichever cookie would be given as parameter
        res.send("Cookie Deleted....");
    }
}


export default StudentController