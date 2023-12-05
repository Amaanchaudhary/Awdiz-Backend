import express from 'express'
// import { Hello } from './Controllers/GlobalControllers.js'
import router from './Routes/index.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';    
import { json } from 'express';

const app = express();

dotenv.config()
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

// app.use((req, res, next) => {
//     // res.send("hi from midddleware use")
//     next();
// } )

app.get("/", function (req, res) {
    res.send("Welcome to awdiz backend server");
})

app.use("/api/v1" , router)

mongoose.connect(process.env.MONGOURL).then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App is running on 8000 port"));
