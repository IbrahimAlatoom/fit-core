/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class EmployeeSettings {

    @Prop({ required: false })
    reciveNotifications?: boolean;

    @Prop({ required: false })
    reciveEmails?: boolean;

    @Prop({ required: false })
    reciveSms?: boolean;
}

export const EmployeeSettingsSchema = SchemaFactory.createForClass(EmployeeSettings);