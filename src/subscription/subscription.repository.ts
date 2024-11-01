import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SubscriptionModel } from "./subscription.model";
import { Model } from "mongoose";
import { Subscription } from "./subscription.entity";
import { SubscriptionMapper } from "./subscription.mapper";

@Injectable()
export class SubscriptionRepository {
    constructor(@InjectModel(SubscriptionModel.name) private subscriptionModel: Model<SubscriptionModel>) {}

    async create(subscription: Subscription) {
        const raw = SubscriptionMapper.toPersistence(subscription);
        await this.subscriptionModel.create(raw);
        return subscription;
    }

    async update(subscription: Subscription) {
        const raw = SubscriptionMapper.toPersistence(subscription);
        return await this.subscriptionModel.updateOne({ id: subscription.id }, raw);
    }
}