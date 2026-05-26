import app from './src/app.js'

// Define the port number for the server
let port=3000  

// Start the Express server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})