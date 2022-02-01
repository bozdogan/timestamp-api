const express = require("express");
const apiRoutes = require("./api-routes");

const defaultPort = 3001;
const app = express();

app.use(express.static("public"));
app.use("/api", apiRoutes);

app.listen(defaultPort, "127.0.0.1", () => {
    console.log(`LISTENING ON PORT  ${defaultPort}`);
});