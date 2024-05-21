const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/projectnext", {
}).then(() => {
    console.log("Connection is Succesfull")
}).catch((error) => {
    console.log("No Connection")
});