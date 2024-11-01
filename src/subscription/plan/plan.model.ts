import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

Schema(
    {
        collection: "plan"
    }
)
export class PlanModel {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    code: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    currency: string;
}

export const PlanSchema = SchemaFactory.createForClass(PlanModel);
