import express from "express";
import connectDb from "./config/db.js";


// Initialize Express application
let app = express();

// express middleware for post request
app.use(express.json())
//  calls the connectDb function on server
await connectDb()



// Export configured Express app
export default app;
