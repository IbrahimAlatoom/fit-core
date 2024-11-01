import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({
    collection : 'organizations'
})
export class OrganizationModel extends Document{
    @Prop({required: true})
    id:string

    @Prop({required: true})
    name: string

    @Prop({required: true})
    phone: string;

    @Prop({required: false})
    address?: string;

    @Prop({required: true})
    accountId: string;
}

export const OrganizationSchema = SchemaFactory.createForClass(OrganizationModel);