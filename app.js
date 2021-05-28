import express from 'express';
import path from 'path'

const app = express();
const __dirname = path.resolve()

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);
