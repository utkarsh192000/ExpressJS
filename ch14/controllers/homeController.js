const homeController = (req, res) => {
    // res.render('index',{name:"utkarsh"});
    // along with instruction to fetch the index.ejs file ; it is also sending the data which could be used using <%= %> in views
    const data={
        "title":"Home"
    }
    res.render('index',data);
    // these data may be variable sometime as per the condition  ; whcih will help us to make our ejs dynamic 
}

export { homeController }