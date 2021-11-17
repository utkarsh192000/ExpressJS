import { join } from 'path'
// import join so that we can use it while sending a html page from views

const homeController=(req,res)=>{
    res.sendFile(join(process.cwd(),'views','index.html'));
    // sending the index.html from views 
}
// made a homecontroller which can be used as function/callback in routes/module.js


export {homeController}
// export it so that it could be used 