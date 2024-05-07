import express from 'express';
import bodyParser from 'body-parser';
import database from './config/database.js';
import TwitController from './controllers/twitController.js';
import cronJob from './utils/cronService.js'

const app = express();
const PORT = process.env.PORT || 3000

database.authenticate()
    .then(() => console.log('Database connected....'))
    .catch(error => console.log('Database Error: ' + error));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/twits',TwitController.getTwits);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

cronJob.start();