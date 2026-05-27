import app from "./src/app.js";
import connectDb from "./src/config/db.js";
// Define the port number for server

let port =3000
// connect the database to server 
await connectDb() 
// Start Express Server
app.listen(port,()=>{
    console.log(`Server is running on ${port} port `)
})