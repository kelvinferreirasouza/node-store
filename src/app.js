'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco de dados
mongoose.connect(config.connectionString);

// Carrega as Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as rotas
const IndexRoute = require('./routes/IndexRoute');
const ProductRoute = require('./routes/ProductRoute');
const CustomerRoute = require('./routes/CustomerRoute');
const OrderRoute = require('./routes/OrderRoute');

app.use(bodyParser.json({
    limit: 5mb
}));
app.use(bodyParser.urlencoded({ 
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', IndexRoute);
app.use('/products', ProductRoute);
app.use('/customers', CustomerRoute);
app.use('/orders', OrderRoute);

module.exports = app;