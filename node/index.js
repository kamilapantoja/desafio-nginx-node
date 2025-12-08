const mysql = require('mysql2');
const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

function connectWithRetry() {
    const connection = mysql.createConnection(config);

    connection.connect((err) => {
        if (err) {
            console.log('Erro ao conectar ao MySQL, tentando novamente em 2 segundos', err.message);
            setTimeout(connectWithRetry, 2000);
        } else {
            console.log('Conectado ao MySQL!');
            startApp(connection);
        }
    });
}

function startApp(connection) {

    connection.query(`
        CREATE TABLE IF NOT EXISTS people (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255),
            PRIMARY KEY(id)
        );
    `);

    app.get('/', (req, res) => {
        const name = "Kamila Pantoja";

        connection.query(`INSERT INTO people(name) VALUES(?)`, [name]);

        connection.query(`SELECT name FROM people`, (err, results) => {
            if (err) throw err;

            let list = "<ul>";
            results.forEach(row => list += `<li>${row.name}</li>`);
            list += "</ul>";

            res.send(`<h1>Full Cycle Rocks!</h1>${list}`);
        });
    });


    app.listen(port, () => console.log('Servidor rodando na porta ' + port));
}

connectWithRetry();
