import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import userRouter from "./routes/users.js";
import habitRouter from "./routes/habits.js";
import todoRouter from "./routes/todo.js";
import dailyRouter from "./routes/dailies.js";
import searchRouter from "./routes/search.js";


//connect to database
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('database is connected')
} catch (error) {
    console.log(error)
}

//create an express app
const app = express();

//use middlewares
app.use(express.json());
app.use(cors())

//use routes
app.use(userRouter, habitRouter, todoRouter, dailyRouter, searchRouter);
    

//listen on incoming requests
app.listen(3005, () => {
    console.log('app is listening on port 3005');
});
