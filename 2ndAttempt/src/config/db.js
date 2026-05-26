/**
 * Database connecting module
 * Mongodb connection setup using  Mongoose
 */
import mongoose from "mongoose";

/**
 *Establish connection with MongoDb database
 *Uses async/await for asynchronous conection flow
 */
async function connectDB() {
  try {
    // Connect to the MongoDB database using Mongoose 

    await mongoose.connect("mongodb://0.0.0.0/notes");
    console.log("Connected to the database successfully");
  } catch (error) { 
    
    // Log any errors that occur during the connection process
    console.error("Error connecting to the database:", error);
  }
}

export default connectDB;
