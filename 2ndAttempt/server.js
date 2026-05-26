import app from "./src/app.js";
// Define the port number for server
let port=3000

// Start Express server
app.listen(port,()=>{
    console.log(`Server running on ${port} port `)
})