import { Module } from '@nestjs/common';
import { SubscriptionModel, SubscriptionSchema } from './subscription.model';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionService } from './subscription.service';
import { SubscriptionRepository } from './subscription.repository';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: SubscriptionModel.name, schema: SubscriptionSchema }])
    ],
    providers: [SubscriptionService, SubscriptionRepository],
    exports:[SubscriptionService]
})
export class SubscriptionModule {}
