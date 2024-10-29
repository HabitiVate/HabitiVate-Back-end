import express from "express";
import mongoose from "mongoose";
import cors from "cors"


//connect to database
await mongoose.connect(process.env.MONGO_URI);

//create an express app
const app = express();

//use middlewares
app.use(express.json());
app.use(cors())

//listen on incoming requests
app.listen(3005, () => {
    console.log('app is listening on port 3005');
});
