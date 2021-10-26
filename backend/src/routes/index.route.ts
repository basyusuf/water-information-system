import express from 'express';
const router = express.Router();
import indexController from '../controller/index.controller';
import subscriptionController from '../controller/subscription.controller';
import orderController from '../controller/order.controller';

router.get('/', indexController.sayHello);
router.get('/getCustomerInfo/:phoneNumber', subscriptionController.getCustomerInfo);
router.post('/getSubscriptionOrders/:subscriptionId', orderController.getSubscriptionOrders);

export default router;
