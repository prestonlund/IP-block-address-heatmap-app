// host API on Heroku
const express = require("express");
const app = express();
const importData = require("./GeoLite2-City-Blocks-IPv6-lat-lon-min.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("IPv6 address block API")
});

app.get("/locations", (req, res) => {
    res.send(importData);
});

app.listen(port, () => {
    console.log(`Heatmap app is listening on port http://localhost:${port}`);
});