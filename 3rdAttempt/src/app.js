
import express from 'express';
 
//  Initialize Express application
let app = express();
// Middleware to parse JSON request bodies
app.use(express.json())
// Export configured Express app
export default app;