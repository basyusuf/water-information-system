import { EntityRepository, Repository } from 'typeorm';
import { Database } from '../../Database';
import { SubscriptionEntity } from './subscription.entity';

@EntityRepository(SubscriptionEntity)
export class SubscriptionRepository extends Repository<SubscriptionEntity> { }

export const getSubscriptionRepository = async (): Promise<SubscriptionRepository> => {
    let connection = await Database.getInstance();
    let repositoryClone = connection.getCustomRepository(SubscriptionRepository);
    return repositoryClone;
};