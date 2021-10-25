import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderStatus } from "../../../enum/OrderStatus.enum";
import { PaymentMethod } from "../../../enum/PaymentMethod.enum";
import { Product } from "../../../model/product.model";
import { SubscriptionEntity } from "../subscription/subscription.entity";

@Entity({ name: 'order' })
export class OrderEntity {
    @PrimaryGeneratedColumn()
    orderId: number;

    @ManyToOne(() => SubscriptionEntity, subs => subs.subscriptionId, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "subscriptionId" })
    subscription: SubscriptionEntity;

    @Column({ type: 'json', nullable: false })
    products: Product[];

    @Column("enum", { enum: PaymentMethod })
    paymentMethod: PaymentMethod;

    @Column({ type: 'timestamp' })
    deliveryDate: Date;

    @Column({ type: 'float' })
    totalAmount: number;

    @Column("enum", { enum: OrderStatus, default: OrderStatus.NEW })
    status: OrderStatus;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    public updatedAt: Date;
}