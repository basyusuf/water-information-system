import { Request, Response, NextFunction } from 'express';
import { getSubscriptionRepository } from '../database/entities/subscription/subscription.repository';
import { ErrorResponse } from '../helper/ErrorResponse';
const getCustomerInfo = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.hasOwnProperty("phoneNumber")) {
        res.json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get());
    }
    try {
        let subscriptionRepo = await getSubscriptionRepository();
        let checkResult = await subscriptionRepo.getSubscriptionInfoByPhone(req.params.phoneNumber);
        if (checkResult.status) {
            if (Array.isArray(checkResult.data) && checkResult.data.length > 0) {
                res.json(checkResult.data).status(200);
            } else {
                res.json(new ErrorResponse("Belirtilen telefona ait kayıt bulunamamıştır.").get()).status(403);
            }
        } else {
            res.json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get()).status(500);
        }
    } catch (err) {
        console.info(err);
        res.json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get()).status(500);
    }
};
export default {
    getCustomerInfo,
};
