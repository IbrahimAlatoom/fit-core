import { Injectable } from '@nestjs/common';
import { SubscriptionRepository } from './subscription.repository';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
    constructor(private subscriptionRepository: SubscriptionRepository) {}

    create(subscription: Subscription) {
        return this.subscriptionRepository.create(subscription);
    }

    update(subscription: Subscription) {
        return this.subscriptionRepository.update(subscription);
    }
}
