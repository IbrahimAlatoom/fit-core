import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

Schema(
    {
        collection: "subscription"
    }
)
export class SubscriptionModel extends Document {

    @Prop({ required: true })
    id: string;
    
    @Prop({ required: true })
    accountId: string;

    @Prop({ required: true })
    planId: string;

    @Prop({ required: true })
    packageId: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;
}

export const SubscriptionSchema = SchemaFactory.createForClass(SubscriptionModel);