import express from 'express'
import { addNoteController, getNoteController, updateNoteController,deleteNoteController } from '../controllers/note.controller.js'

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

// PATCH API route for updating sigle note 
// URL: /notes
// When a PATCH request comes to /notes, u need to provide the id of that note u want to update 
// updateNoteController function will run


router.patch('/notes/:id',updateNoteController)


// DELETE API route for Deleting sigle note 
// URL: /notes
// When a DELETE request comes to /notes, provided id of that note will delete
// deleteNoteController function will run

router.delete('/notes/:id',deleteNoteController)
export default router

