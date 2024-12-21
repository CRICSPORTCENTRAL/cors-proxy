const express = require("express");
const request = require("request");
const app = express();

app.use("/proxy", (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send("No URL provided");
    }
    request(url).pipe(res.setHeader("Access-Control-Allow-Origin", "*"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
