import app from "./src/app.js";
// Define the port number for server

let port =3000
// Start Express Server
 
app.listen(port,()=>{
    console.log(`Server is running on ${port} port `)
})