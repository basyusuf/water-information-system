import { EntityRepository, Repository } from 'typeorm';
import { EntityResponse } from '../../../helper/EntityReponse';
import { Database } from '../../Database';
import { SubscriptionEntity } from './subscription.entity';

@EntityRepository(SubscriptionEntity)
export class SubscriptionRepository extends Repository<SubscriptionEntity> {
    async getSubscriptionInfoByPhone(phone: string) {
        try {
            let informationData = await this.find({ phoneNumber: phone });
            return new EntityResponse({ status: true, data: informationData }).get();
        } catch (err) {
            return new EntityResponse({ status: false }).get();
        }
    }
}

export const getSubscriptionRepository = async (): Promise<SubscriptionRepository> => {
    let connection = await Database.getInstance();
    let repositoryClone = connection.getCustomRepository(SubscriptionRepository);
    return repositoryClone;
};