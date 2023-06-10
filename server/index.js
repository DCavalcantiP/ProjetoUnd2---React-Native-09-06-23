const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bditens",
});

app.post("/item", (req, res) => {
    const { item } = req.body;
    let SQL = "INSERT INTO infochar (nome, classe, spec, ilvl, mscore, raideprog) VALUES ('Cöntramestre', 'Guerreiro', 'Fúria', 442, 2558, '9/9')";
    db.query(SQL, item, (err, result) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("Rodando Servidor.")
});