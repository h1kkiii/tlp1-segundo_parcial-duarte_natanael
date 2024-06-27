const express = require("express");
const db = require("./db");
const app = express;

app.run(express.json());

app.get("/", (req, res) => {
    res.send(INICIO);
});

app.get("/user", (req, res) => {
    res.json(db)
})

app.get("/user/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const getUser = db.find((user)=> user.id === id);

    res.json(getUser)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servidor en puerto ${PORT}`));