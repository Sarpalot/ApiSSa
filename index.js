const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

let database = [
    { id: 1, latitude: 60, longitude: 70 },
    { id: 2, latitude: 40, longitude: 80 },
];

app.get('/api/locations', (req, res) => {
    let format = req.query.format;
    if (format === 'pretty') {
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(database, null, 4));
    } else {
        res.json(database);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});