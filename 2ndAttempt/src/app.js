/**
 * Express application configuration file
 * Creates and exports the Express app instance.
 */
import connectDB from "./config/db.js"; 
import express from "express";
// Initializing Express application
let app = express();
// Middleware to parse JSON request bodies
app.use(express.json()); 

// Import and connect to the database
await connectDB();




// Export configured Express application
export default app;
