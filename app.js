const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
    res.send("GitHub Security Demo");
});

app.get("/run", (req, res) => {
    const command = req.query.command;

    exec(command, (error, stdout) => {
        if (error) {
            res.send(error.message);
            return;
        }

        res.send(stdout);
    });
});

app.listen(3000);