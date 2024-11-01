import { Module } from '@nestjs/common';
import { SubscriptionModel, SubscriptionSchema } from './subscription.model';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionService } from './subscription.service';
import { SubscriptionRepository } from './subscription.repository';
import { PlanModule } from './plan/plan.module';
import { PackageModule } from './package/package.module';

@Module({
    imports: [
        PlanModule,
        PackageModule,
        MongooseModule.forFeature([{ name: SubscriptionModel.name, schema: SubscriptionSchema }])
    ],
    providers: [SubscriptionService, SubscriptionRepository],
    exports:[SubscriptionService]
})
export class SubscriptionModule {}
