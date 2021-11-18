const aboutController = (req, res) => {
    // res.render('index',{name:"utkarsh"});
    res.render('about',{"title":"About"});
    // these data may be variable sometime as per the condition  ; whcih will help us to make our ejs dynamic 
    // here we have passed an object in which a title is paased which will help in changing dynamic title setting
}

export { aboutController }