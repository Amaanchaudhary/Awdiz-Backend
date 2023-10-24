import express from 'express'
import { Hello } from './Controllers/GlobalControllers.js'
import router from './Routes/index.js';

const app = express();
app.use((req, res, next) => {
    console.log("hi from midddleware use")
    // res.send("hi from midddleware use")
    next();
} )

app.get("/", function (req, res) {
    res.send("Hello Awdiz");
})

app.use("/api/v1" , router)



app.listen(8000, () => console.log("App is running on 8000 port"));
