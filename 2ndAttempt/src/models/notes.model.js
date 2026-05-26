/**
 * Note model definition using Mongoose
 * Defines the schema and model for notes in the MongoDB database
 */
import mongoose from 'mongoose';
// Define a Mongoose schema for the Note model
let noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// Create a Mongoose model based on the schema and export it
let noteModel = mongoose.model("notes", noteSchema);
export default noteModel;