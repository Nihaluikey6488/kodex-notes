
import express from 'express';
import router from './routes/note.routes.js';
 
//  Initialize Express application
let app = express();
// Middleware to parse JSON request bodies
app.use(express.json())


app.use('/api',router)
// Export configured Express app
export default app;