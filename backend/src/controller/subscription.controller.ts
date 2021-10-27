import { Request, Response, NextFunction } from 'express';
import { getSubscriptionRepository } from '../database/entities/subscription/subscription.repository';
import { ErrorResponse } from '../helper/ErrorResponse';
const getCustomerInfo = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.params.hasOwnProperty("phoneNumber")) {
        res.status(500).json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get());
    }
    try {
        let subscriptionRepo = await getSubscriptionRepository();
        let checkResult = await subscriptionRepo.getSubscriptionInfoByPhone(req.params.phoneNumber);
        if (checkResult.status) {
            if (Array.isArray(checkResult.data) && checkResult.data.length > 0) {
                res.status(200).json(checkResult.data);
            } else {
                res.status(403).json(new ErrorResponse("Belirtilen telefona ait kayıt bulunamamıştır.").get());
            }
        } else {
            res.status(500).json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get());
        }
    } catch (err) {
        res.status(500).json(new ErrorResponse("Sunucu hatası. Lütfen tekrar deneyin.").get());
    }
};
export default {
    getCustomerInfo,
};
