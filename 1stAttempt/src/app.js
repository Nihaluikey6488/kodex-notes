import express from "express";
import connectDb from "./config/db.js";
import noteModel from "./models/notes.model.js";

// Initialize Express application
let app = express();

// express middleware for post request
app.use(express.json());
//  calls the connectDb function on server
await connectDb();

/**
 * @route POST /api/notes
 * @description Create a new note need title and description in the request body
 * @access Public
 */

app.post("/api/notes", async(req, res) => {
  let { title, description } = req.body;
  // ----validation----
  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }
  if (!description) {
    return res.status(400).json({
      message: "Description is required",
    });
  }
  if (title.trim().length < 3) {
    return res.status(400).json({
      message: "Title must be at least more than 3 characters long",
    });
  }

  if (description.trim().length < 10) {
    return res.status(400).json({
      message: "Description must be at least more than 10 characters long",
    });
  }
  // ---- If validation passes, create the note ----
  let newNote=await noteModel.create({
    title,description
  })

  return res.status(201).json({
    message:"Note created successfully",
    note: newNote
  })
});

// Export configured Express app
export default app;
