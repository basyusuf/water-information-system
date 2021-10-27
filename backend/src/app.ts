import express from 'express';
import path from 'path';
import logger from 'morgan';
import "reflect-metadata";
import config from './config';

import routes from './routes/index';

const app = express();
const PORT = config.SERVER_PORT || 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
