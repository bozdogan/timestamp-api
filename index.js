const express = require("express");

const defaultPort = 3001;
const app = express();

app.get("/", (req, res) => res.send("MERABALAR...."));

app.listen(defaultPort, "127.0.0.1", () => {
    console.log(`LISTENING ON PORT  ${defaultPort}`);
});