const app = require('./app');
const config = require('./config/config');

app.listen(config.port, () => {
    console.info(`Listening to port ${config.port}`);
});