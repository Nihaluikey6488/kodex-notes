import express from 'express'
import { addNoteController } from '../controllers/note.controller.js'

// Create router object 
let  router =express.Router()
// POST API route for creating notes
// URL: /notes
// When a POST request comes to /notes,
// addNoteController function will run
router.post('/notes',addNoteController)
export default router

