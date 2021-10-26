import subs from './subs.json';
import orders from './orders.json';
import { getSubscriptionRepository } from '../entities/subscription/subscription.repository';
import { getOrderRepository } from '../entities/order/order.repository';
import { PaymentMethod } from '../../enum/PaymentMethod.enum';
import { Product } from '../../model/product.model';
import { OrderStatus } from '../../enum/OrderStatus.enum';
import { exit } from 'process';
const seedFunction = async () => {
    let subRepo = await getSubscriptionRepository();
    let orderRepo = await getOrderRepository();
    console.info("Sub seed started!");
    subs.forEach(async (sub_item) => {
        let newItem = subRepo.create();
        newItem.address = sub_item.address;
        newItem.brand = sub_item.brand;
        newItem.cityName = sub_item.cityName;
        newItem.subCityName = sub_item.subCityName;
        newItem.subscriptionId = sub_item.subscriptionId;
        newItem.distributorNumber = sub_item.distributorNumber;
        newItem.locationName = sub_item.locationName;
        newItem.fullName = sub_item.fullname;
        newItem.phoneNumber = sub_item.phoneNumber;
        await subRepo.save(newItem);
    });
    console.info("Sub seed finished!");

    console.info("Order seed started!");
    orders.forEach(async (order_item) => {
        let newOrder = orderRepo.create();
        newOrder.subscriptionId = order_item.subscriptionId;
        newOrder.deliveryDate = new Date(order_item.deliveryDate);
        newOrder.paymentMethod = order_item.paymentMethod as PaymentMethod;
        newOrder.products = order_item.products as Product[];
        newOrder.totalAmount = order_item.totalAmount;
        newOrder.status = order_item.status as OrderStatus;
        await orderRepo.save(newOrder);
    });
    console.info("Order seed finished!");

    console.info("Seed completed");
    exit(0);
};

seedFunction();