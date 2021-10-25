import { Request, Response, NextFunction } from 'express';
import { Database } from '../database/Database';
const sayHello = async (req: Request, res: Response, next: NextFunction) => {
    let connection =  await Database.getInstance();
    res.json({hello:"Test for case!"});
};
export default {
    sayHello,
};
