const express = require("express");
const app = express();
const port = 3000;

const posts = [
    {
        title: "Ciambellone",
        content: "Un grande classico da colazione, soffice e profumato.",
        image: "/images/ciambellone.jpeg",
        tags: ["dolci", "colazione"]
    },
    {
        title: "Cracker alla barbabietola",
        content: "Cracker croccanti e colorati, perfetti per l’aperitivo.",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["salato", "barbabietola"]
    },
    {
        title: "Pane fritto dolce",
        content: "Un dolce semplice della tradizione, fatto con pane raffermo.",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "tradizione"]
    },
    {
        title: "Pasta alla barbabietola",
        content: "Un primo piatto colorato con barbabietola e pistacchi.",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["primi", "barbabietola"]
    },
    {
        title: "Torta paesana",
        content: "Dolce tipico lombardo a base di pane e cacao.",
        image: "/images/torta_paesana.jpeg",
        tags: ["dolci", "tradizione"]
    }
];

// rotta principale
app.get("/", (req, res) => {
    res.send("Server del mio blog");
});

// avvio del server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});