import { EntityRepository, Repository } from 'typeorm';
import { Database } from '../../Database';
import { OrderEntity } from './order.entity';

@EntityRepository(OrderEntity)
export class OrderRepository extends Repository<OrderEntity> { }

export const getOrderRepository = async (): Promise<OrderRepository> => {
    let connection = await Database.getInstance();
    let repositoryClone = connection.getCustomRepository(OrderRepository);
    return repositoryClone;
};