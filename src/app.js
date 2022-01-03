const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const config = require('./config/config');
const morgan = require('./config/morgan');
const routes = require('./routes/v1');

const app = express();

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// Add security HTTP headers
app.use(helmet());

// Parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Sanitize request data
app.use(xss());
app.use(mongoSanitize());

// Enable gzip compression
app.use(compression());

// Enable CORS
app.use(cors());
app.options('*', cors());

// V1 API routes
app.use('/v1', routes);

module.exports = app;