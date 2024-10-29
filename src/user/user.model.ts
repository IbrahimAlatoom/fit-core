import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { Account } from 'src/schemas/account.schema';

@Schema({
  collection: "users"
})
export class UserModel extends Document {
  // TODO: Extends from base model
  @Prop({ required: true })
  id: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  accountsIds: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }] })
  accounts?: Account[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

UserSchema.pre<UserModel>('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});
