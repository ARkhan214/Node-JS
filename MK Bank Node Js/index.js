const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3030;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {

    //direct ei page dekhar jonno
    //res.send('<p>Welcome to MK Bank</p>');

    //onno page import kore dekhar jonno
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});










//Last
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
