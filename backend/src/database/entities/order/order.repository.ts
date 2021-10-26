import { EntityRepository, Repository } from 'typeorm';
import { EntityResponse } from '../../../helper/EntityReponse';
import { Database } from '../../Database';
import { OrderEntity } from './order.entity';

@EntityRepository(OrderEntity)
export class OrderRepository extends Repository<OrderEntity> {
    async getOrderBySubscriptionId(subscriptionId: string) {
        try {
            let informationData = await this.find({ subscriptionId: subscriptionId });
            return new EntityResponse({ status: true, data: informationData }).get();
        } catch (err) {
            return new EntityResponse({ status: false }).get();
        }
    }
}

export const getOrderRepository = async (): Promise<OrderRepository> => {
    let connection = await Database.getInstance();
    let repositoryClone = connection.getCustomRepository(OrderRepository);
    return repositoryClone;
};