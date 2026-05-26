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
// Export configured Express application
export default app;
