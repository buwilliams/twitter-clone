const express = require('express');
const cors = require('cors');
const MySql = require('./mysql');
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const db = new MySql({
    database: 'twitter_db',
    host: 'localhost',
    user: 'root',
});

app.get('/user', async function (req, res) {
    let results = await db.query('SELECT * FROM user');
    res.json(results);
});

app.get('/tweet', async function (req, res) {
    let results = await db.query('SELECT * FROM tweet');
    res.json(results);
});

app.use(function (req, res, next) {
    res.status(404).json({ status: 'not found' });
});

app.listen(port, async () => {
    console.log(`⚡️Listening at http://localhost:${port}`);
});