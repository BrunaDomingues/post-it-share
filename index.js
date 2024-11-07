const express = require('express');
const app = express();

app.use(express.static('public'));
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/note/:id', (req, res) => {
    res.sendFile(__dirname + '/public/note.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});