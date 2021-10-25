import { Request, Response, NextFunction } from 'express';
const sayHello = async (req: Request, res: Response, next: NextFunction) => {
    res.json({hello:"Test for case!"});
};
export default {
    sayHello,
};
