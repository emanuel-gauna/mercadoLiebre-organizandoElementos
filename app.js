const express = require("express");
const { join } = require("path");
const app = express();
const path = require("path");
const PORT = 3009;

app.use(express.static("public"));
app.use(express.static("views"));

/* home */
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
/* register */
app.post("/register", (req, res) =>{
    res.sendFile(path,join(__dirname, "views/register.html"))
});
/* login */
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
});

app.listen( PORT, () => console.log(`server listen in port ${PORT}\n http://localhost:${PORT}`));