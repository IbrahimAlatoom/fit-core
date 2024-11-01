import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'accounts',
})
export class AccountModel extends Document {
  @Prop({ required: true })
  id: string;

  @Prop()
  role?: string;
}

export const AccountSchema = SchemaFactory.createForClass(AccountModel);
