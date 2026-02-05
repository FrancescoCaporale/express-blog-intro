const express = require("express");
const app = express();
const port = 3000;

// rotta principale
app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

// avvio del server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});