const express = require('express');
const cors = require('cors');

const app = express();

const {create, update, remove} = require('./controller')

app.use(express.json());
app.use(cors());

// app.get('/table');
app.post('/createTable', create);
app.put('/updateTable/:id', update);
app.delete('/deleteTable/:id', remove);