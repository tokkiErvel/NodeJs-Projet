const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

const dataRoutes = require('./View/index');
app.use('/', dataRoutes);

app.listen(port, ()=> {
    console.log(`Server runnig at ${port}`);
});