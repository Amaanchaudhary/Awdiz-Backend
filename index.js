import express from 'express'
import { Hello } from './Controllers/GlobalControllers.js'
import router from './Routes/index.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';    
import { json } from 'express';

const app = express();

dotenv.config()
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    // console.log("hi from midddleware use")
    // res.send("hi from midddleware use")
    next();
} )

app.get("/", function (req, res) {
    res.send("Hello Awdiz");
})

app.use("/api/v1" , router)


mongoose.connect(process.env.MONGOURL).then(() => console.log("Database Connected"));

app.listen(8000, () => console.log("App is running on 8000 port"));
