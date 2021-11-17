
import { join } from 'path'
// just import join from path module in nodejs , whcih we would use to pass the HTML FILE 



// 1)  SENDING STRING AS RESPONSE ON SUCCESSFUL PATH ROUTING 

// const homeController=(req,res)=>{
//     res.send("Home Page");
// }
// // written the callback/logic return it as homeController

// 2) SENDING HTML AS RESPONSE BUT WRITTEN DIRECTLY INSIDE THE METHOD 

// const homeController=(req,res)=>{
//     res.send("<h1>Home Page</h1>");
// }

// 3) SENDING HTML AS RESPONSE BUT WRITTEN IN SEPARATE FILE AND RENDER IT HERE
// use the concept of views 
// we would be writing our HTML code in views folder , where we will be having different html files 
// after writing that , we can directly render that file here in .sendFile  as response  
const homeController = (req, res) => {
    // res.sendFile('c:\\expressjs\\ch10\\views\\index.html');
    // we may write our path of our index html file , but not sure ho it will react ; to solve we use join methode from 
    // path module 
    
    console.log(join(process.cwd(),'views','index.html'));
    // C:\ExpressJS\ch10\views\index.html path is printed in terminal , which is same as path of our file in OS
    res.sendFile(join(process.cwd(), 'views', 'index.html'));
}

















export { homeController }
// export it so that it can be imported and used in routes/web.js