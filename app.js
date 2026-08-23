const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("GitHub Security Demo");
});

app.listen(3000, () => {
    console.log("Application running on port 3000");
});