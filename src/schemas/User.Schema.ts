/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: [] })
    roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

// Hash password before saving to database
UserSchema.pre<User>('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);

    }
    next();
});
