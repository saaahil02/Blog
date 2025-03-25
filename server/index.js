import express from "express"
import connectToMongo from "./config/db.js";
import authRoutes from './routes/blog.js';
import cors from "cors";


const app= express();
const PORT =9000;

connectToMongo();

app.use(cors());

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("API is running..")
});

//Api Routes
app.use("/api/v1",authRoutes);

app.listen(PORT,()=>{
    console.log(`API is running on http://localhost:${PORT}`);
})