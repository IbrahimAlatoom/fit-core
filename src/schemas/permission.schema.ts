import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Permission extends Document {
    @Prop({ required: true })
    action: string;

    @Prop({ required: true })
    resource: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
