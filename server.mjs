// Imports 
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors"
import connectDB from "./db/conn.mjs";
import globalError from "./middleware/globalError.mjs";



// Setups 
connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;



// Midware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());



// Routes

// Err Midware
app.use(globalError);


// Listener
app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`)
});