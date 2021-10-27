import { Request, Response, NextFunction } from 'express';
import { getOrderRepository } from '../database/entities/order/order.repository';
import { ErrorResponse } from '../helper/ErrorResponse';
const getSubscriptionOrders = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.hasOwnProperty("subscriptionId")) {
        res.json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get()).status(500);
    }
    try {
        let orderRepo = await getOrderRepository();
        let checkResult = await orderRepo.getOrderBySubscriptionId(req.params.subscriptionId);
        if (checkResult.status) {
            if (Array.isArray(checkResult.data) && checkResult.data.length > 0) {
                res.status(200).json(checkResult.data);
            } else {
                res.status(403).json(new ErrorResponse("Belirtilen telefona ait kayıt bulunamamıştır.").get())
            }
        } else {
            res.status(500).json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get());
        }
    } catch (err) {
        res.status(500).json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get());
    }
};
export default {
    getSubscriptionOrders,
};
