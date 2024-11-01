import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    collection: "package"
})
export class PackageModel {
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
    @Prop({ required: true })
    features: string[]
}

export const PackageSchema = SchemaFactory.createForClass(PackageModel);