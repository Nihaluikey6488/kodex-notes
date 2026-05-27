import noteModel from "../models/note.model.js"



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
        message:"Internal server error"
    })
   }
}

