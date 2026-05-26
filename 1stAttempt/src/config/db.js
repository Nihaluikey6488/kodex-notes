/**
 * Database connecting module
 * Mongodb connection setup using  Mongoose
 */
import mongoose from 'mongoose'


/**
 *Establish connection with MongoDb database
 *Uses async/await for asynchronous conection flow
 */

let connectDb=async()=>{
    try {
        // connect to Mongodb database
        await mongoose.connect('mongodb://0.0.0.0/notes')
        console.log("mongodb connected successfully")
    } catch (error) {
        // Log connection failure error
        console.log("Error in mongodb connection")
    }
}

export default connectDb;