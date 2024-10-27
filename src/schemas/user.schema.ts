import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Account } from './account.schema';

@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }] })
    accounts: Account[];

    async validatePassword(inputPassword: string): Promise<boolean> {
        return await bcrypt.compare(inputPassword, this.password);
    }
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
