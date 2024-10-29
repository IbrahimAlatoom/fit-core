import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserModel } from '../user/user.model';
import { Role } from './role.schema';
import { Types } from 'mongoose';

@Schema()
export class Account extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: UserModel;

    @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
    role: Role;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    address: string;

    // Additional account-specific properties can go here
}

export const AccountSchema = SchemaFactory.createForClass(Account);
