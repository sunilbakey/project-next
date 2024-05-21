const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())

const port = 8000
require("./db/conn");
const userRouter = require("./routers/user");

app.get("/", (req, res) => {
    res.send("Welcome to Project Next Backend")
});

app.use(express.json())
app.use(userRouter);

app.listen(port, () => {
    console.log(`Connection is steup at ${port}`)
})