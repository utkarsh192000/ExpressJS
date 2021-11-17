
import { join } from 'path'
// just import join from path module in nodejs , whcih we would use to pass the HTML FILE 



// 1)  SENDING STRING AS RESPONSE ON SUCCESSFUL PATH ROUTING 
// const aboutController=(req,res)=>{
//     res.send("About Page");
// }
// written the callback/logic return it as aboutController

// 2) SENDING HTML AS RESPONSE BUT WRITTEN DIRECTLY INSIDE THE METHOD 

// const aboutController=(req,res)=>{
//     res.send("<h2>About Page</h2>");
// }


// 3) SENDING HTML AS RESPONSE BUT WRITTEN IN SEPARATE FILE AND RENDER IT HERE
// use the concept of views 
// we would be writing our HTML code in views folder , where we will be having different html files 
// after writing that , we can directly render that file here in .sendFile  as response  
const aboutController=(req,res)=>{
    console.log(join(process.cwd(),'views','about.html'));
    // C:\ExpressJS\ch10\views\about.html
    res.sendFile(join(process.cwd(),'views','about.html'));
}













export {aboutController}
// export it so that it can be imported and used in routes/web.js 