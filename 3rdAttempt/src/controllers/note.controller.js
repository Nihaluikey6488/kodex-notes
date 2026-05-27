import noteModel from "../models/note.model.js"

/**
 * @route POST /api/notes
 * @description Create a new note need title and description in the request body
 * @access Public
 */

export const addNoteController=async(req,res)=>{
   try {
// Get title and desciption from body
    let {title,description}=req.body

    //  ---Validation---

    // Check if  title is empty
    if(!title){
        return res.status(400).json({
         error:"Title is required"
        })
    }
    //  Check if  descroption is empty
    if(!description){
        return res.status(400).json({
         error:"Description is required"
        })
    }
   // Check minimum length of title
   if(title.length<3){
    return res.status(400).json({
        error:"Title must be at least more than 3 characters long"
    })
   }
     // Check minimum length of description
   if(description.length<3){
    return res.status(400).json({
        error:"Description must be at least more than 10 characters long"
    })
   }

// Create new Note in database
   let newNote=await noteModel.create({
    title,description
   })
// Send success response
   return res.status(201).json({
    message:"Note created successfully",
    notes:newNote
   })
    
   } catch (error) {

    // Handle servor errors
    return res.status(500).json({
        error:"Internal server error"
    })
   }
}

/**
 * @route GET /api/notes
 * @description Fetch all Existing notes
 * @access Public
 */


export const getNoteController=async(req,res)=>
{
    try {
        // Get all Existing Notes
            let notes=await noteModel.find()

        // Check if notes is Empty
        if(notes.length==0){
            return res.status(400).json({
                message:"No notes found"
            })
        }
        return res.status(200).json({
            message:"Notes fetched successfully",
            notes
        })

    } catch (error) {
        return res.status(500).json({
            error:"Internal server error"
        })
    }
}