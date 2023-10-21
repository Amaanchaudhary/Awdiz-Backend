import express from 'express'
import { Hello } from './Controllers/GlobalControllers.js'

const app = express();

app.get("/", function (req, res) {
    res.send("Hello Amaan");
})

app.get("/hello", Hello);

app.listen(8000, () => console.log("App is running on 8000 port"));
