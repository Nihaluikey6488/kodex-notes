import express from 'express'
import { addNoteController, getNoteController } from '../controllers/note.controller.js'

// Create router object 
let  router =express.Router()
// POST API route for creating notes
// URL: /notes
// When a POST request comes to /notes,
// addNoteController function will run
router.post('/notes',addNoteController)

// GET API route for fetching  notes
// URL: /notes
// When a GET request comes to /notes,
// getNoteController function will run

router.get('/notes',getNoteController)
export default router

