import { Request, Response, NextFunction } from 'express';
const sayHello = async (req: Request, res: Response, next: NextFunction) => {
    res.json({ hello: "Health check!" });
};
export default {
    sayHello,
};
