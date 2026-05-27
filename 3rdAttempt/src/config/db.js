//**
// Datbase connecting module
// Mongodb connected setup using mongoose */
import mongoose from "mongoose";

/**
 *Establish connection of mongoDb with mongoose
 *Uses async/await for asynchronous connection flow  
 */
async function connectDb(){
    try {
// connect to Mongodb database
        await mongoose.connect('mongodb://0.0.0.0/notes')
        console.log("mongodb connected successfully")
    } catch (error) {
        // Log connection failure error 
        console.log("Error in connecting MongoDb")
    }
}


export default  connectDb;