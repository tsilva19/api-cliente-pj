const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
//'mongodb://host.docker.internal:27017/consulta'
////fa163e822325l01.ctsp.des.cloud.ihf:31000/
mongoose.connect('mongodb://localhost:27017/consulta', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);

