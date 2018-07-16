import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { UsersRouter } from './routes/Users';
import { CategoriesRouter } from './routes/Categories';
import debug from 'debug';
import morgan from 'morgan';

const log = debug('app');

(async () => {
    try {
        await createConnection();

        const app = express();
        
        app.use(bodyParser.json());
        app.use(morgan('tiny'));

        app.use(UsersRouter.path, UsersRouter.router);
        app.use(CategoriesRouter.path, CategoriesRouter.router);
        
        app.listen(process.env.PORT, () => {
            log(`open on  http://localhost:${process.env.PORT}`)
        });

    } catch(err) {
        log('🔥 Connection Error: ', err);
    }
})()
