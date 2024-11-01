import { Subscription } from "./subscription.entity";
import { SubscriptionModel } from "./subscription.model";

export class SubscriptionMapper {   
    static toDto(subscription: Subscription) {
        return {
            id: subscription.id,
            accountId: subscription.accountId,
            planId: subscription.planId,
            packageId: subscription.packageId,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
        }
    }

    static toEntity(subscriptionModel: SubscriptionModel) {
        const subscription = Subscription.create({
            id: subscriptionModel.id,
            accountId: subscriptionModel.accountId,
            planId: subscriptionModel.planId,
            packageId: subscriptionModel.packageId,
            startDate: subscriptionModel.startDate,
            endDate: subscriptionModel.endDate,
        });
        return subscription;
    }

    static toPersistence(subscription: Subscription) {
        return {
            id: subscription.id,
            accountId: subscription.accountId,
            planId: subscription.planId,
            packageId: subscription.packageId,
            startDate: subscription.startDate,
            endDate: subscription.endDate,
        }
    }
}