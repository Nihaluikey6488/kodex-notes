/**
 * Express application configuration file
 * Creates and exports the Express app instance.
 */
import connectDB from "./config/db.js";
import express from "express";
import noteModel from "./models/notes.model.js";
// Initializing Express application
let app = express();
// Middleware to parse JSON request bodies
app.use(express.json());

// Import and connect to the database
await connectDB();
/**
 * @route POST /api/notes
 * @description Create a new note need title and description in the request body
 * @access Public
 */

app.post("/api/notes", async (req, res) => {
  let { title, description } = req.body;

//   --validation--
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  if (title.trim().length < 3) {
    return res
      .status(400)
      .json({ error: "Title must be at least 3 characters long" });
  }
  if (!description) {
    return res.status(400).json({ error: "Description is required" });
  }
  if (description.trim().length < 10) {
    return res
      .status(400)
      .json({ error: "Description must be at least 10 characters long" });
  }
// Create a new note in the database using the noteModel and return the created note in the response
  let newNote = await noteModel.create({ title, description });

  return res
    .status(201)
    .json({ message: "Note created successfully", note: newNote });
});
/**
 * @route GET /api/notes
 * @description Get all notes from the database and return them in the response
 * @access Public
 */

app.get('/api/notes', async (req, res) => {
    //  getting all notes from the database using the noteModel and return them in the response
    let notes = await noteModel.find();
    return res.status(200).json({
        message: "Notes retrieved successfully",
        notes
    });
})

/**
 * @route PATCH /api/notes
 * @description Update an existing note in the database
 * @access Public
 */
app.patch('/api/notes/:id', async (req, res) => {
    let { id } = req.params;
    let {description} = req.body;
    if(!description){
        return res.status(400).json({error: "Description is required"});
    }
    if(description.trim().length < 10){
        return res.status(400).json({error: "Description must be at least 10 characters long"});
    }
    // Update the note with the specified ID in the database using the noteModel and return the updated note in the response
    let note = await noteModel.findById(id);
    if(!note){
        return res.status(404).json({error: "Note not found"});
    }
    note.description = description;
    await note.save();
    return res.status(200).json({
        message: "Note updated successfully",
        note
    });

})

// Export configured Express application
export default app;
