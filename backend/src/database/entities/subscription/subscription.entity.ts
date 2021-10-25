import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'subscription' })
export class SubscriptionEntity {
    @PrimaryColumn()
    subscriptionId: string;

    @Column()
    fullName: string;

    @Column()
    address: string;

    @Column()
    locationName: string;

    @Column()
    subCityName: string;

    @Column()
    cityName: string;

    @Column()
    brand: string;

    @Column()
    phoneNumber: string;

    @Column()
    distributorNumber: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    public updatedAt: Date;
}