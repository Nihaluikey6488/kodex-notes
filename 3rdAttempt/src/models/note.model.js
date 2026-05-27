import mongoose from "mongoose";
// creates Schema for notes collection
let noteSchema=new mongoose.Schema({

    // Title field
    title:{
        type:String, //Data type should be string
        trim:true, // Remove the extra spaces from start and end
        required:[true,"title is required"] //Validation message
    },
    // Description field
    description:{
         type:String,
        trim:true,
        required:[true,"Description is required"]
    }
},
// automatically add createdAt  and updatedAt 
{
    timestamps:true
})
/**
 * noteModel using noteSchema
 * 
 */

let noteModel=mongoose.model("note",noteSchema)
// Export model so it can used in other files
export default noteModel;