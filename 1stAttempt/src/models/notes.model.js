/**
 * Notes Model
 *Defines the schema and model structure
 */

import mongoose from "mongoose";

/**
 * Notes Schema 
 * Represent the structure of note document
 */
let noteSchema=new mongoose.Schema({
    title:String,
description:String
})

/**
 * Note Model
 * Created a MongDb collection named notes
 */

const noteModel=mongoose.model("notes",noteSchema)

export default noteModel

